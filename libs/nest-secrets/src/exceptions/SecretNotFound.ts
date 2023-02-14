export class SecretNotFound extends Error {
  constructor(secretName: string) {
    super(`Secret ${secretName} not found`);
  }
}
