import React, { useState } from "react";
import { VStack, Flex, Button, position } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Configurations from "./components/Configurations/Configurations";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideDark as codeColor } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useInputReducer } from "./hooks/useInputReducer";
import { InputTypes } from "./types/types";
import { useClipboard } from "@chakra-ui/react";

function App() {
  const { inputList, onAdd, onRemove, onUpdate } = useInputReducer();
  const [code, setCurrentCode] = useState("");
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const [hasError, setError] = useState(false);
  const rootCode = `:root {\n${
    code ? code : "// The code will be generated here..."
  }\n}`;

  const handleOnGenerateCode = () => {
    let hasInvalidInput = false;
    const templateStrings = inputList.map(inp => {
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
      default:
        break;
    }
  });

  const handleClipboardCopy = () => {
    onCopy();
    setValue(rootCode);
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
          hasInvalidInput={hasInvalidInput}
          onGenerate={handleOnGenerateCode}
        />

        <Flex
          overflow="hidden"
          w="2xl"
          maxH="45rem"
          minH="45rem"
          position="relative"
        >
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
