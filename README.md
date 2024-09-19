# Team Bridge

Team Bridge is a team communication platform similar to Slack. It helps teams collaborate through messaging, channels, and file sharing.

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## About

Team Bridge provides an easy-to-use interface for team communication, enabling users to create channels, send direct messages, and share files. The application is built to enhance collaboration and communication within a team.

## Technologies

- **Frontend**: Built using [Bun](https://bun.sh/),[Shadcn](https://ui.shadcn.com/)
- **Backend**: Powered by [Convex](https://convex.dev/)
- **Real-time Communication**: WebSockets for real-time messaging
- **Database**: Convex database for storing message and user data
- **Deployment**: Configured for development with Bun and Convex

## Features

- Team Channels for group discussions
- Direct Messaging between team members
- File sharing in conversations
- Real-time updates for messages and notifications
- User-friendly UI for easy navigation

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v16.x or later
- **Bun**: v0.x.x (Install [Bun](https://bun.sh/docs/install) if not already)
- **Convex CLI**: (Install [Convex CLI](https://docs.convex.dev/get-started/installation))

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/shamsfarabii/team-bridge.git
    cd team-bridge
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Set up Convex:
    ```bash
    bunx convex init
    ```

4. Configure environment variables (if required):
    - Set up your environment variables in a `.env` file. (Refer to the `.env.example` file for required variables)

## Running the Project

To start the project locally, you'll need to run both the Bun and Convex development servers.

1. Start the Bun development server:
    ```bash
    bun run dev
    ```

2. In another terminal, start the Convex development server:
    ```bash
    bunx convex dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Scripts

- **bun run dev**: Starts the Bun frontend development server.
- **bunx convex dev**: Starts the Convex backend development server.
- **bun run build**: Builds the application for production.
- **bun run lint**: Lints the codebase for any errors or issues.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please ensure your code follows the project's linting and formatting guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
