import styled from "styled-components";
import { StatusPillType } from "./StatusPillType.enum";

interface IStatusPill {
  type: StatusPillType;
}

const calcStatusPillColor = (type: StatusPillType) => {
  switch (type) {
    case StatusPillType.Success:
      return "#02AD11";
    case StatusPillType.Pending:
      return "#9EA7AD";
    case StatusPillType.Error:
      return "#FF3838";
    default:
      return "";
  }
};

export const StatusPill = styled.div<IStatusPill>`
  background: ${(props) => calcStatusPillColor(props.type)};
  max-height: 80%;
  display: inline-flex;
  margin-top: 0.5%;
  align-items: center;
  color: white;
  padding: 0.25rem 0.75rem;
  font-weight: bold;
  border-radius: 0.5rem;
`;
