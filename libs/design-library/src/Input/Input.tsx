import { ChangeEvent, DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, useMemo } from "react";

import { StyledInputWrapper } from "./StyledInputWrapper";
import { Flex } from "../Flex";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  displayMode?: "light" | "dark";
  itemName?: string;
  itemId?: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>, isValid?: boolean) => void) | undefined;
  validator?: (value: string) => boolean;
}

export const Input = forwardRef((props: IInputProps, ref?: ForwardedRef<HTMLInputElement>) => {
  const { displayMode, onChange, validator } = props;

  //const [invalidState] = useState<string>();
  const sanitizeInputProps = useMemo((): DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> => {
    const sanitizedProps = { ...props };
    delete sanitizedProps["displayMode"];
    delete sanitizedProps["itemName"];
    delete sanitizedProps["itemId"];
    delete sanitizedProps["validator"];
    return sanitizedProps;
  }, [props]);

  return (
    <Flex flex={"1 auto"} flexGrow={1}>
      <StyledInputWrapper displayMode={displayMode}>
        <Flex flexDirection={"column"}>
          <input
            ref={ref}
            key={props.itemId}
            placeholder={"Placeholder Text"}
            autoComplete={"off"}
            {...sanitizeInputProps}
            onChange={(e) => {
              if (validator) {
                return onChange ? onChange(e, validator(e.currentTarget.value)) : null;
              }
              return onChange ? onChange(e) : null;
            }}
          />
        </Flex>
      </StyledInputWrapper>
    </Flex>
  );
});
