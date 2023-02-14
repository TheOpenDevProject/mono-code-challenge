export const invertObjectToArray = <T extends object, K extends { uuid: string; propKey: string; propValue: string }>(obj: T, originalPropMap: K[]) => {
  const output = [];

  const keys = Object.keys(obj);

  for (const key of keys) {
    const uuid = originalPropMap.find((propObject) => propObject["propKey"] === key)?.uuid;

    output.push({ uuid, propKey: key, propValue: obj[key as keyof T] });
  }

  return output;
};
