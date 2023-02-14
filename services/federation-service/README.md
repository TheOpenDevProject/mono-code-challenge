## Context
This service is a GraphQL federation server. It is not inteded to carry any of its own logic or code.

## Author Notes
The choice to use NestJS as the host for the federation server was one mostly made with the time constraints of this demo project in mind.
A high performance **Go** or **Rust** based federation server is likely a better choice for a production system.

This is a toy implementation of a GraphQL federation server. A production system would likely have the following diferences.

 - Implement an environment specific auto discovery mechanism OR an external list of available services (In a persistent storage mechanism).
 - Implement in memory caching of the service schema and the service list.

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


