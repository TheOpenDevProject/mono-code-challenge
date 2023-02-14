import { DescriptionBlock, Flex, Separator, Text, TextArea, TextInput } from "@scylla-digital/design-library";
import React, { Dispatch, useState } from "react";
import { SchemaGeneratorAction } from "../../hooks/useSchemaGenerator";
import { QuestionType } from "../../types/CreateQuestion.type";
import { Button } from "@material-ui/core";
import { useEditableProps } from "../../hooks/useEditableProps";

export interface InstructionFieldConfigProps {
  setSchema: Dispatch<SchemaGeneratorAction>;
  activePageIndex: number;
  onComplete: () => void;
  onCancel: () => void;
  item: any;
}

type InstructionFieldEditable = {
  title: string;
  description: string;
};
export function InstructionFieldConfig(props: InstructionFieldConfigProps) {
  const { setSchema, activePageIndex, onComplete, item, onCancel } = props;
  const defaultProps = useEditableProps<InstructionFieldEditable>(item.defaultProps);
  const [title, setTitle] = useState(defaultProps.title || "");
  const [description, setDescription] = useState(defaultProps.description || "");

  const addToSchema = () => {
    setSchema({
      event: "update_question",
      payload: {
        uuid: item.uuid,
        type: QuestionType.Description,
        defaultProps: { title, description: description },
        pageNumber: activePageIndex,
        ordinal: item.ordinal,
        prettyName: "",
      },
    });
    onComplete();
  };

  return (
    <Flex flexStyles={{ padding: "1rem" }} flexGap={"1rem"} flexDirection={"column"}>
      <Flex flexGap={"1rem"} flexDirection={"column"}>
        <Text>This is the text that will appear above the large input box</Text>
        <Flex>
          <TextInput value={title} label={"Description Title"} type={"text"} onChange={(e) => setTitle(e)} />
        </Flex>
        <TextArea defaultValue={description} onChange={(e) => setDescription(e.currentTarget.value)} label={"Enter a long form set of instructions"} />
      </Flex>
      <Separator label={"Preview"} />
      <Flex flexShrink={1}>
        <DescriptionBlock title={title} description={description} />
      </Flex>
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
