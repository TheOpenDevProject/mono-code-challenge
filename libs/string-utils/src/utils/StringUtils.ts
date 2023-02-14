export const sanitise = (text: string) =>
  text.replace(/\s+|'|"|&|\/|\\|\?|#|,|;/g, '_');

export const decodeBase64ToAscii = (str: string) =>
  Buffer.from(str, 'base64').toString('ascii');
