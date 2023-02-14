import { Text } from "@scylla-digital/design-library";
import Select from "react-select";
import React from "react";

export interface ICompanySelectorProps {
  onChange: (value: string | undefined) => void;

  value: string | undefined;
}

export function CompanySelector(props: ICompanySelectorProps) {
  const { onChange, value } = props;
  return (
    <>
      {" "}
      <Text>View As:</Text>
      <Select
        value={{ value: value, label: value }}
        onChange={(value) => onChange(value ? value.value : undefined)}
        options={[
          { label: "SecondBite", value: "SecondBite" },
          { label: "Axil Coffee Roasters", value: "Axil Coffee Roasters" },
          { label: "MYER", value: "MYER" },
        ]}
      />
    </>
  );
}
