## Context
This is a toy authentication service that verifies a users credentials and returns a signed JWT token.

## Author Notes
This service absolutely **DOES NOT** appropriately separate responsibilities correctly and encompasses all user related operations.

When implementing a production system the following would be true

- This service would handle user credential validation and POSSIBLY token signing depending on the system architecture.
- This service would NOT handle user creation, deletion, or modification.
- This service would NOT handle user profile information.
- This service would NOT handle user permissions.
- This service would make RPC calls to an independent mailing service.
- This service would implement a microservice transaction architecture to ensure data is as up to date as possible across the entire systems architecture.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```



### Environment Variables (Create a .env file)

```
DATABASE_URL=mysql://root:SuperSecretPassword!@localhost:3307/db
CORS_CLIENT_URL=http://localhost:3000
```