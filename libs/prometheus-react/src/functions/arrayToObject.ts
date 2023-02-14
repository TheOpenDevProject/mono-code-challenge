export const arrayToObject = <T>(items: T[], key: string, valueKey: string): T => {
  const finalObject = {};

  for (const item of items) {
    const propKeyValue = item[key as keyof T];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    finalObject[propKeyValue] = item[valueKey];
  }

  return finalObject as T;
};
