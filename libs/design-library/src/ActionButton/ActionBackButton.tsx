import { ActionButton } from "./ActionButton";
import { ArrowBackRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function ActionBackButton() {
  const navigate = useNavigate();
  return (
    <ActionButton
      onClick={() => {
        navigate(-1);
      }}
      Icon={ArrowBackRounded}
      text={""}
    />
  );
}
