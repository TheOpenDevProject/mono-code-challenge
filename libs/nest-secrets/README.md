### Package: @scylla-digital/nest-secrets

This is a reusable NestJS dependent module that provides a simple way to access secrets on AWS.

In YOUR NestJS config you must add the following lines:

```dotenv
#This is the Secrets Manager Repository ARN, if this is not provided as a global config, you will need to pass the ARN into each call of the getSecret()
#AWS_SECRETS_ARN=XXXXXXX
#AWS_REGION=us-east-1 Optionally defaults to ap-southeast-2
```

Also ensure the execution environment is authenticated with IAM to be able to fetch secrets

### Usage

Most of the time you will want to use the `SecretsService` class.

The SecretsModule is provided as a `@Global()` and can be used across all providers in your NestJS application.
Alternatively you can simply add it to the modules you need to use it in.
