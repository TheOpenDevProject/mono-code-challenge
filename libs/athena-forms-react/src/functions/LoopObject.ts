export function* convertKeysToIterable(obj: Record<string, unknown>): Generator<string> {
  for (const key of Object.keys(obj)) {
    yield key;
  }
}
