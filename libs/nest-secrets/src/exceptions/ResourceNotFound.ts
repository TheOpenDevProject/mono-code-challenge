export class ResourceNotFound extends Error {
  constructor(ARN: string) {
    super(`The resource with ARN ${ARN} was not found`);
  }
}
