import React from "react";
import { Container, Image, Flex } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <Flex w="100%" h="16" bgColor="#FAFAFA" alignItems="center">
      <Container maxW="full">
        <Image w="28" src={Logo} alt="Logo" />
      </Container>
    </Flex>
  );
}

export default Header;
