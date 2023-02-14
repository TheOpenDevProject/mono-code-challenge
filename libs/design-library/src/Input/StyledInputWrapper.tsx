import styled from "styled-components";
import { IInputProps } from "./Input";

export const StyledInputWrapper = styled.span<IInputProps>`

  min-width: 400px;

  label {
    font-size: 0.75rem;
    font-family: sans-serif;
    padding: 0.25rem 1rem;
    border-bottom: 1px solid rgba(141, 141, 141, 0.22);
    
    background: #e3e3e3;
    color: rgb(210, 31, 31);
    font-weight: lighter;
  }
}

input[type='text'],
input[type='password'],
input[type='email'] { {
  border-top: 3px solid rgba(0, 0, 0, 0);
  border-right: 3px solid rgba(0, 0, 0, 0);
  border-left: 3px solid rgba(0, 0, 0, 0);
  font-size: 1rem;
  transition: border-bottom-color 250ms;
  background: ${(props) => (props.displayMode === `light` ? `#F3F3F3` : `#f4f4f4`)};
  font-family: sans-serif;
  flex: 1;
  padding: 1rem;
  border-bottom: ${(props) => (props.displayMode === `light` ? `3px solid rgba(0,0,0,0.25)` : `none`)};

 
  outline: none;
  &:invalid {
    outline: none;
    border-bottom: 3px solid #f44336;
  }


  &:required {
    &:focus {
      outline: none;
      border-bottom: 3px solid #faaf34;
    }
  }
}
`;
