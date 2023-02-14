### Package: @scylla-digital/nest-secrets

This is a reusable NestJS dependent module that provides a simple way to access secrets on AWS.

In YOUR NestJS config you must add the following lines:

```dotenv
AWS_ACCESS_KEY_ID=XXXXXXXX
AWS_SECRET_ACCESS_KEY=XXXXXXX
#This is the Secrets Manager Repository ARN, if this is not provided as a global config, you will need to pass the ARN into each call of the getSecret()
#AWS_SECRETS_ARN=XXXXXXX
#AWS_REGION=us-east-1 Optionally defaults to ap-southeast-2
#AWS_SESSION_TOKEN=XXXXXXXX Optionally defaults to none (Only required when using GSTS)
```

### Usage

Most of the time you will want to use the `SecretsService` class.

The SecretsModule is provided as a `@Global()` and can be used across all providers in your NestJS application.
Alternatively you can simply add it to the modules you need to use it in.

### Generating Tokens

To generate tokens for unit tests, run the following command:

```bash
npm run console:test -- create <file>
npm run console:test -- create <file> --expiry <expiry>

npm run console:test -- create payload.json
npm run console:test -- create payload.json --expiry 3d
```

- `file` should be a path to a JSON file containing your token payload
- `expiry` should be a timespan string (e.g. 100y, 3d). Default value is `100y`

The generated token will be written to `stdout`
