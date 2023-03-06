import React from "react";
import { Stack } from "@chakra-ui/react";

import { ColorInput, UnitInput } from "@rootcraft/components";
import { InputTypes, ButtonsOptionsType } from "@rootcraft/types";

type InputsListProps = {
  list: InputTypes[];
  onAdd: (type: ButtonsOptionsType) => void;
  onRemove: (input: InputTypes) => void;
  onUpdate: (input: InputTypes) => void;
};
function InputsList({ list, onRemove, onUpdate }: InputsListProps) {
  const renderInput = (input: InputTypes) => {
    switch (input.type) {
      case "btn-color":
        return (
          <ColorInput
            key={input.id}
            input={input}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        );
      case "btn-units":
        return (
          <UnitInput
            key={input.id}
            input={input}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        );
      default:
        break;
    }
  };
  return (
    <Stack w="container.xs" spacing={3} direction="column" mt="12">
      {list.map(input => renderInput(input))}
    </Stack>
  );
}

export default InputsList;
