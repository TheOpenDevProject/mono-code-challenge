import { Flex } from "@scylla-digital/design-library";
import { LongTextFieldConfig } from "./FieldConfigs/LongTextFieldConfig";
import { RatingInputFieldConfig } from "./FieldConfigs/RatingInputFieldConfig";
import { InstructionFieldConfig } from "./FieldConfigs/InstructionFieldConfig";
import { Dispatch } from "react";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";
import { FieldType } from "../types/FieldType";

interface IConfigureFieldModal {
  fieldType: string;
  setSchema: Dispatch<SchemaGeneratorAction>;
  activePageIndex: number;
  onComplete: () => void;
  onCancel: () => void;
  item: unknown;
}

export function ConfigureFieldModal(props: IConfigureFieldModal) {
  const { fieldType, setSchema, activePageIndex, onComplete, item, onCancel } = props;
  if (fieldType === FieldType.AreaInput) {
    return <LongTextFieldConfig onCancel={onCancel} item={item} setSchema={setSchema} activePageIndex={activePageIndex} onComplete={onComplete} />;
  }

  if (fieldType === FieldType.RatingZone) {
    return <RatingInputFieldConfig onCancel={onCancel} item={item} setSchema={setSchema} activePageIndex={activePageIndex} onComplete={onComplete} />;
  }

  if (fieldType === FieldType.DescriptionBlock) {
    return <InstructionFieldConfig onCancel={onCancel} item={item} setSchema={setSchema} activePageIndex={activePageIndex} onComplete={onComplete} />;
  }

  return <Flex>Unknown Field Type</Flex>;
}
