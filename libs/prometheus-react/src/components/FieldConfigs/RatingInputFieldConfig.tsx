import { Flex, RatingZoneHOC, Separator, Text, TextArea, TextInput } from "@scylla-digital/design-library";

import React, { Dispatch } from "react";
import { SchemaGeneratorAction } from "../../hooks/useSchemaGenerator";
import { Button, Slider } from "@material-ui/core";
import { QuestionType } from "../../types/CreateQuestion.type";
import { useEditableProps } from "../../hooks/useEditableProps";

export interface RatingInputFieldConfigProps {
  setSchema: Dispatch<SchemaGeneratorAction>;
  activePageIndex: number;
  onComplete: () => void;
  item: any;
  onCancel: () => void;
}

type RatingZoneEditable = {
  label: string;
  description: string;
  max: number;
};

export function RatingInputFieldConfig(props: RatingInputFieldConfigProps) {
  const { setSchema, activePageIndex, onComplete, item, onCancel } = props;

  const defaultProps = useEditableProps<RatingZoneEditable>(item.defaultProps);

  const [ratingMax, setRatingMax] = React.useState<number>(defaultProps.max);
  const [fieldTitle, setFieldTitle] = React.useState<string>(defaultProps.label || "");
  const [fieldDescription, setFieldDescription] = React.useState<string>(defaultProps.description);
  const [prettyName, setPrettyName] = React.useState<string>(item.prettyName || "");
  const addToSchema = () => {
    setSchema({
      event: "update_question",
      payload: {
        uuid: item.uuid,
        type: QuestionType.RatingZone,
        ordinal: item.ordinal,
        defaultProps: {
          label: fieldTitle,
          description: fieldDescription,
          max: ratingMax,
        },
        pageNumber: activePageIndex,
        prettyName,
      },
    });
    onComplete();
  };

  return (
    <Flex flexStyles={{ padding: "1rem" }} flexGap={"1rem"} flexDirection={"column"}>
      <Flex flexGap={"1rem"} flexDirection={"column"}>
        <Text>This is the text that will appear above the large input box</Text>
        <Flex flexDirection={"column"} flexGap={"1rem"}>
          <TextInput label={"Rating Name"} type={"text"} onChange={setFieldTitle} value={fieldTitle} />
          <TextInput value={prettyName} label="Report Name" placeholder="Enter name to display on reports" type={"text"} onChange={setPrettyName} />
        </Flex>
        <Flex>
          <TextArea defaultValue={fieldDescription} label={"Rating Description"} onChange={(e) => setFieldDescription(e.currentTarget.value)} />
        </Flex>
        <Text>Max Rating (1 - 10)</Text>
        <Slider min={1} max={10} aria-label="Default" valueLabelDisplay="auto" value={ratingMax} onChange={(e, value) => setRatingMax(value as number)} marks />
      </Flex>
      <Separator label={"Preview"} />
      <Flex>
        <RatingZoneHOC onChange={() => ""} max={ratingMax} label={fieldTitle} description={fieldDescription} />
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
