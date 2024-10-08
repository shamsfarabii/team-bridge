import { useMutation } from "convex/react";
import { useCallback, useMemo, useState } from "react";

import { api } from "../../../../convex/_generated/api";
import { Id,Doc } from "../../../../convex/_generated/dataModel";
import { error } from "console";

type RequestType = {name:string};
type ResponseType = Id<"workspaces"> | null;

type Options = {
    onSuccess?: (data: ResponseType) => void;
    onError?: (error:Error) => void;
    onSettled?: () => void;
    throwError?: boolean;
}

export const useCreateWorkspace = () => {
    const [data,setData] = useState<ResponseType>(null);
    const [error,setError] = useState<Error | null>(null);
    const [status,setStatus] = useState<"settled" | "pending" | "success" | "error" | null>(null);

    const isPending = useMemo(() => status === "pending", [status]);
    const isSuccess = useMemo(() => status === "success", [status]);
    const isError = useMemo(() => status === "error", [status]);
    const isSettled = useMemo(() => status === "settled", [status]);

    const mutation = useMutation(api.workspaces.create);

    const mutate = useCallback(async(values:RequestType, options?: Options) => {
        try{
            setData(null);
            setError(null);
            setStatus("pending");

            const response = await mutation(values);
            options?.onSuccess?.(response);
            return response;
        }catch(e){
            options?.onError?.(e as Error);
            if(options?.throwError){
                throw e;
            }
        }finally{
            setStatus("settled");
            options?.onSettled?.();
        }
    },[mutation]);

    return {
        mutate,
        data,
        error,
        isPending,
        isSuccess,
        isError,
        isSettled
    };
};