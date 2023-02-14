# Code Challenge

## Overview
This is my attempt at creating a generic Code Challenge for the role of [Insert new role here!].
This project is a monorepo managed by [Rush](https://rushjs.io/).

## Installation
1. Clone the repository
2. Install rush globally `npm install -g @microsoft/rush`
3. Install dependencies `rush install`
4. Build the entire project `rush build`


## Running the project

### Microservices
1. Navigate to each individual microservice via your preferred terminal and run `docker-compose up --d`
2. Run `rush generate:orm` to generate the prisma client library
3. Follow the instructions in the `README.md` of each microservice to configure each service
4. Run `npm run start` in each microservice to start the service
5. Navigate to the `federation-service` and run `npm run start` to start the gateway


### Frontend
1. Navigate to the `apps/code-challenge` directory and run `npm run start`

### Notes
1. Not all code is used, this is both a code challenge and a giant mono-repo to showcase *some* of my work.