import { Flex, Separator, TextArea, TextInput } from "@scylla-digital/design-library";
import { Button } from "@material-ui/core";

import React, { Dispatch } from "react";
import { SchemaGeneratorAction } from "../../hooks/useSchemaGenerator";
import { QuestionType } from "../../types/CreateQuestion.type";
import { useEditableProps } from "../../hooks/useEditableProps";

export interface LongTextFieldConfigProps {
  setSchema: Dispatch<SchemaGeneratorAction>;
  activePageIndex: number;
  onComplete: () => void;
  item: any;
  onCancel: () => void;
}

export function LongTextFieldConfig(props: LongTextFieldConfigProps) {
  const { setSchema, activePageIndex, onComplete, item, onCancel } = props;
  const defaultProps = useEditableProps<any>(item.defaultProps);
  const [fieldTitle, setFieldTitle] = React.useState<string>(defaultProps.label);
  const [prettyName, setPrettyName] = React.useState<string>(item.prettyName || "");
  const addToSchema = () => {
    setSchema({
      event: "update_question",
      payload: {
        uuid: item.uuid,
        internalSchemaName: fieldTitle.replace(/\s/g, "-").toLowerCase(),
        type: QuestionType.LargeTextInput,
        pageNumber: activePageIndex,
        ordinal: item.ordinal,
        defaultProps: { label: fieldTitle },
        prettyName,
      },
    });
    onComplete();
  };

  return (
    <Flex flexStyles={{ padding: "1rem" }} flexGap={"1rem"} flexDirection={"column"}>
      <Flex flexGap={"1rem"} flexDirection={"column"}>
        <TextInput value={fieldTitle} label="Field Title" placeholder="Enter Field Title" type={"text"} onChange={setFieldTitle} />
        <TextInput label="Report Name" placeholder="Enter name to display on reports" type={"text"} onChange={setPrettyName} value={prettyName} />
        <Separator label={"Preview"} />
        <TextArea label={fieldTitle} />
      </Flex>
      <Flex></Flex>
      <Flex flexGap={"1rem"} justifyContent={"flex-end"}>
        <Button variant={"contained"} color={"primary"} onClick={addToSchema}>
          Update Field
        </Button>
        <Button variant={"contained"} color={"secondary"} onClick={onCancel}>
          Cancel
        </Button>
      </Flex>
    </Flex>
  );
}
