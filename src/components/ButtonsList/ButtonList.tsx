import React from "react";
import { HStack, Button } from "@chakra-ui/react";

import { ButtonsOptionsType } from "@rootcraft/types";
const ButtonStyles = {
  borderRadius: 6,
  fontSize: ".8rem",
  fontWeight: "normal",
  size: "sm",
  colorScheme: "gray"
};

type ButtonListProps = {
  onClick: (type: ButtonsOptionsType) => void;
  onGenerate: () => void;
  onRemoveAll: () => void;
  hasInvalidInput: boolean;
};
function ButtonList({
  onClick,
  onRemoveAll,
  hasInvalidInput,
  onGenerate
}: ButtonListProps) {
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    onClick(name as ButtonsOptionsType);
  };
  return (
    <HStack minW="md">
      <Button
        {...ButtonStyles}
        ml={0}
        name="btn-color"
        onClick={handleClickButton}
      >
        COLORS
      </Button>
      <Button {...ButtonStyles} name="btn-units" onClick={handleClickButton}>
        UNITS
      </Button>
      <Button
        {...ButtonStyles}
        bgColor="slategray"
        color="whiteAlpha.800"
        name="btn-units"
        _hover={{ backgroundColor: "gray.500" }}
        onClick={onRemoveAll}
      >
        Remove All
      </Button>
      <Button
        {...ButtonStyles}
        colorScheme="orange"
        name="btn-generate"
        isDisabled={hasInvalidInput}
        onClick={onGenerate}
      >
        Generate
      </Button>
    </HStack>
  );
}

export default ButtonList;
