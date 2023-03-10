import React, { useState } from "react";
import { VStack, Flex, Button } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark as codeColor } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Configurations, Header } from "@rootcraft/components";
import { useInputReducer } from "@rootcraft/hooks";
import { InputTypes } from "@rootcraft/types";

function App() {
  const {
    inputList,
    onAdd,
    onRemove,
    onUpdate,
    onRemoveAll
  } = useInputReducer();
  const [code, setCurrentCode] = useState("");
  const { onCopy, setValue, hasCopied } = useClipboard("");
  const [, setError] = useState(false);
  const rootCode = `:root {\n${
    code ? code : "// The code will be generated here..."
  }\n}`;

  const handleOnGenerateCode = () => {
    let hasInvalidInput = false;
    const templateStrings = inputList.map((inp: InputTypes) => {
      const formattedValue = inp.value
        .replace(/[^a-zA-Z0-9\s]+/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();

      switch (inp.type) {
        case "btn-color":
          return ` --${formattedValue}: ${inp.color};`;
        case "btn-units":
          return ` --${formattedValue}: ${inp.rem}rem;`;
        default:
          break;
      }
    });

    const finalTemplateString = templateStrings.join("\n");
    setCurrentCode(finalTemplateString);
    setError(hasInvalidInput);
  };

  const ButtonStyles = {
    borderRadius: 6,
    fontSize: ".8rem",
    fontWeight: "normal",
    size: "sm",
    colorScheme: "gray"
  };
  const hasInvalidInput = inputList.some((input: InputTypes) => {
    switch (input.type) {
      case "btn-color":
        return !input.value || !input.color;
      case "btn-units":
        return !input.value || !input.rem;
    }
  });

  const handleClipboardCopy = () => {
    setValue(rootCode);
    onCopy();
  };

  const handleRemoveAll = () => {
    onRemoveAll();
    setCurrentCode("");
  };

  return (
    <VStack>
      <Header />
      <Flex w="full" gap="8" p="8" justifyContent="space-between">
        <Configurations
          list={inputList}
          onAdd={onAdd}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onRemoveAll={handleRemoveAll}
          hasInvalidInput={hasInvalidInput || inputList.length <= 0}
          onGenerate={handleOnGenerateCode}
        />

        <Flex overflow="hidden" w="3xl" minH="45rem" position="relative">
          <Button
            {...ButtonStyles}
            position="absolute"
            top="2"
            right="2"
            onClick={handleClipboardCopy}
          >
            {hasCopied ? "Copied!" : "Copy"}
          </Button>
          <SyntaxHighlighter
            showLineNumbers
            customStyle={{
              width: "100%",
              borderRadius: "8px",
              padding: "1rem 1rem 5rem 1rem"
            }}
            children={rootCode}
            language="css"
            style={codeColor}
          />
        </Flex>
      </Flex>
    </VStack>
  );
}

export default App;
