import { Grid } from "../Grid";

export interface ITabGroupProps {
  children: React.ReactNode;
  tabGroupTitle: string;
}

export function TabGroup(props: ITabGroupProps) {
  const { children } = props;

  return (
    <Grid columns={2} rows={4}>
      {children}
    </Grid>
  );
}
