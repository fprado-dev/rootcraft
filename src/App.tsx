import React from "react";
import { Container, VStack, Heading } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Configurations from "./components/Configurations/Configurations";

function App() {
  return (
    <VStack>
      <Header />
      <Container
        maxW="full"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        gap="2"
      >
        <Configurations />
        <Heading>Markdown Code</Heading>
      </Container>
    </VStack>
  );
}

export default App;
