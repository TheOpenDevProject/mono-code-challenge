import { paramCase } from "param-case";

export const toCSS = (styles: Partial<CSSStyleDeclaration>) => {
  const css = Object.keys(styles)
    .map((item) => {
      return `${paramCase(item)}:${styles[item as unknown as keyof CSSStyleDeclaration]};`;
    })
    .join(";");

  return css.charAt(css.length) !== ";" ? `${css};` : css;
};
