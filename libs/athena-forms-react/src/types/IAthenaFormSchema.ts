export interface IAthenaFormSchema {
  id: string;
  name?: string;
}

// When trying to render a type Athena form will first try to render from preloaded components,
// if it can't find a component it will throw an error.
