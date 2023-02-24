import React from "react";
import { Stack } from "@chakra-ui/react";
import { InputTypes } from "../Configurations/Configurations";
import { ColorInput } from "../ColorInput/ColorInput";
import { ButtonsType } from "../ButtonsList/ButtonList";

type InputsListProps = {
  list: InputTypes[];
  onClick: (type: ButtonsType) => void;
  onRemove: (input: InputTypes) => void;
  onUpdate: (input: InputTypes) => void;
};
function InputsList({ list, onClick, onRemove, onUpdate }: InputsListProps) {
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
        break;

      default:
        break;
    }
  };
  return (
    <Stack spacing={3} w="md" direction="column" mt="12">
      {list.map(input => renderInput(input))}
    </Stack>
  );
}

export default InputsList;
