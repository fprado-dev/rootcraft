import React from "react";
import { Flex, Container } from "@chakra-ui/react";

import ButtonList from "../ButtonsList/ButtonList";
import InputsList from "../InputsList/InputsList";
import { useInputReducer } from "../../hooks/useInputReducer";

function Configurations() {
  const { add, remove, update, inputList } = useInputReducer();

  return (
    <Flex flex="1" w="100%">
      <Container m={0} p={0}>
        <ButtonList onClick={add} />
        <InputsList
          onClick={add}
          onRemove={remove}
          onUpdate={update}
          list={inputList}
        />
      </Container>
    </Flex>
  );
}

export default Configurations;
