import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ITextInput extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  displayMode?: "light" | "dark";
  itemName?: string;
  itemId?: string;
  onChange?: (value: string) => void | undefined;
  onIsValid?: (isValid: boolean) => boolean;
  validationMessage?: string;
  label?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  styles?: unknown; // Legacy styles compatibility hack
  value?: string;
}
