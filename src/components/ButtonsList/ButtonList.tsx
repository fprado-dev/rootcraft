import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { ButtonsOptionsType } from "../../types/types";

const ButtonStyles = {
  borderRadius: 6,
  fontSize: ".8rem",
  fontWeight: "normal",
  size: "sm",
  colorScheme: "gray"
};

type ButtonListProps = {
  onClick: (type: ButtonsOptionsType) => void;
};
function ButtonList({ onClick }: ButtonListProps) {
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;
    onClick(name as ButtonsOptionsType);
  };
  return (
    <HStack mt="4">
      <Button {...ButtonStyles} name="btn-color" onClick={handleClickButton}>
        COLORS
      </Button>
      <Button {...ButtonStyles} name="btn-metrics" onClick={handleClickButton}>
        METRICS
      </Button>
      <Button {...ButtonStyles} name="btn-units" onClick={handleClickButton}>
        UNITS
      </Button>
      <Button {...ButtonStyles} name="btn-custom" onClick={handleClickButton}>
        CUSTOM
      </Button>
    </HStack>
  );
}

export default ButtonList;
