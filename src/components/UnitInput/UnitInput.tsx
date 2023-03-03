import React from "react";
import {
  Box,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Flex,
  Tag,
  NumberInput,
  NumberInputField
} from "@chakra-ui/react";
import { InputTypes } from "../../types/types";

type UnitInputProps = {
  input: InputTypes;
  type?: "full" | "single";
  onRemove: (input: InputTypes) => void;
  onUpdate: (input: InputTypes) => void;
};

export const UnitInput = ({
  input,
  type = "single",
  onRemove,
  onUpdate
}: UnitInputProps) => {
  const handleRemoveInput = () => {
    onRemove(input);
  };
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...input, value: event.target.value });
  };
  const onTextValueChange = (valueAsString: string, valueAsNumber: number) => {
    onUpdate({ ...input, rem: valueAsString });
  };
  return (
    <Box>
      <FormControl id="first-name" isRequired>
        <FormLabel fontSize="xs">Choose the variable name</FormLabel>
        <HStack mt="2" mb="1">
          <Input
            size="sm"
            fontSize="xs"
            onChange={onTextChange}
            variant="outline"
            _focusVisible={{
              borderColor: "gray"
            }}
            borderRadius={6}
            colorScheme="blackAlpha"
          />
          <Flex gap="2" position="relative" alignItems="flex-end">
            <IconButton
              variant="ghost"
              aria-label="Teste 2"
              onClick={handleRemoveInput}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  strokeWidth="2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              }
            />
          </Flex>
        </HStack>
        <HStack w="full" mt="2" display="flex" justifyContent="flex-start">
          <NumberInput
            size="sm"
            padding="0"
            variant="outline"
            w="16"
            colorScheme="blackAlpha"
            max={4}
            keepWithinRange={false}
            _focusVisible={{
              borderColor: "gray"
            }}
            clampValueOnBlur={false}
            onChange={onTextValueChange}
          >
            <NumberInputField padding="2" />
          </NumberInput>

          <Tag size="sm" alignItems="center" justifyContent="center" p="2">
            REM
          </Tag>
        </HStack>
      </FormControl>
    </Box>
  );
};
