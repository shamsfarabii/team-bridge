import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogHeader,
    DialogDescription,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
    const router = useRouter();
    const [open, setOpen] = useCreateWorkspaceModal();
    const [name, setName] = useState("");

    const { mutate, isPending } = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
        setName("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate({ name },
            {
                onSuccess: (id) => {
                    toast.success("Workspace created successfully");
                    setOpen(false);
                    router.push(`/workspace/${id}`);
                },
                onError: (e) => {
                    console.error(e);
                },
            }
        );
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new workspace</DialogTitle>
                    <DialogDescription>
                        Workspaces are where you can manage your projects and collaborate with your team.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        disabled={isPending}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g. 'Work', 'Personal', 'Project X'"
                    />
                    <div className="flex justify-end">
                        <Button disabled={isPending}>Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}