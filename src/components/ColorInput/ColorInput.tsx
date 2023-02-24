import React, { useState } from "react";
import {
  Box,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Flex
} from "@chakra-ui/react";
import ColorPicker from "../ColorPicker/ColorPicker";
import { InputTypes } from "../Configurations/Configurations";
import { ColorResult } from "react-color";

type ColorInputProps = {
  input: InputTypes;
  onRemove: (input: InputTypes) => void;
  onUpdate: (input: InputTypes) => void;
};

export const ColorInput = ({ input, onRemove, onUpdate }: ColorInputProps) => {
  const [currentColor, setCurrentColor] = useState("#8FBC94");

  const onChangePickerVisibility = () => {
    onUpdate(input);
  };

  const handleExcludeItem = () => {
    onRemove(input);
  };

  const onCloseColorPicker = () => {
    onUpdate(input);
  };

  const onChangeColor = (color: ColorResult) => {
    setCurrentColor(color.hex);
  };

  return (
    <Box>
      <FormControl id="first-name" isRequired>
        <FormLabel fontSize="xs">Choose the variable name</FormLabel>
        <HStack
          maxW="xs"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
        >
          <Input
            fontSize="xs"
            size="sm"
            variant="outline"
            _focusVisible={{
              borderColor: "gray"
            }}
            borderRadius={6}
            colorScheme="blackAlpha"
          />

          <Flex gap="2" position="relative">
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Teste 2"
              onClick={handleExcludeItem}
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
            <IconButton
              size="xs"
              variant="solid"
              bgColor={currentColor}
              aria-label="Color Picker"
              _hover={{ backgroundColor: currentColor }}
              onClick={onChangePickerVisibility}
            />
            {input.isOpen && (
              <ColorPicker
                currentColor={currentColor}
                onChangeColor={onChangeColor}
                onClose={onCloseColorPicker}
              />
            )}
          </Flex>
        </HStack>
      </FormControl>

      {/* <Divider pt="6" maxW="xs" /> */}
    </Box>
  );
};
