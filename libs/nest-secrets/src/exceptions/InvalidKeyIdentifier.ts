export class InvalidKeyIdentifier extends Error {
  constructor() {
    super('The key identifier for the secret you requested is invalid.');
  }
}
