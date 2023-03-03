import React from "react";
import { Flex, Container } from "@chakra-ui/react";

import ButtonList from "../ButtonsList/ButtonList";
import InputsList from "../InputsList/InputsList";
import { InputTypes, ButtonsOptionsType } from "../../types/types";

type ConfigurationsProps = {
  list: InputTypes[];
  onAdd: (type: ButtonsOptionsType) => void;
  onRemove: (input: InputTypes) => void;
  onUpdate: (input: InputTypes) => void;
  onGenerate: () => void;
  onRemoveAll: () => void;
  hasInvalidInput: boolean;
};
function Configurations({
  list,
  onAdd,
  onRemove,
  onUpdate,
  onGenerate,
  onRemoveAll,
  hasInvalidInput
}: ConfigurationsProps) {
  return (
    <Flex>
      <Container m={0} p={0}>
        <ButtonList
          onGenerate={onGenerate}
          hasInvalidInput={hasInvalidInput}
          onRemoveAll={onRemoveAll}
          onClick={onAdd}
        />
        <InputsList
          onAdd={onAdd}
          onRemove={onRemove}
          onUpdate={onUpdate}
          list={list}
        />
      </Container>
    </Flex>
  );
}

export default Configurations;
