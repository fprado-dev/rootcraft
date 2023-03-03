import React, { useState } from "react";
import {
  Box,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Flex,
  Tag
} from "@chakra-ui/react";
import ColorPicker from "../ColorPicker/ColorPicker";
import { ColorResult } from "react-color";
import { InputTypes } from "../../types/types";

type ColorInputProps = {
  input: InputTypes;
  onRemove: (input: InputTypes) => void;
  onUpdate: (input: InputTypes) => void;
};

export const ColorInput = ({ input, onRemove, onUpdate }: ColorInputProps) => {
  const [currentColor, setCurrentColor] = useState("#8FBC94");

  const onChangePickerVisibility = () => {
    onUpdate({ ...input, isOpen: !input.isOpen });
  };
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...input, value: event.target.value });
  };
  const handleExcludeItem = () => {
    onRemove(input);
  };

  const onCloseColorPicker = () => {
    onUpdate({ ...input, color: currentColor, isOpen: !input.isOpen });
  };

  const onChangeColor = (color: ColorResult) => {
    setCurrentColor(color.hex);
  };

  return (
    <Box position="relative">
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

          <IconButton
            variant="ghost"
            aria-label="Trash Icon"
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
        </HStack>
        <HStack display="flex" justifyContent="flex-start" w="full">
          <Tag
            fontSize="xs"
            alignItems="center"
            justifyContent="center"
            w="25%"
            p={2}
          >
            {currentColor}
          </Tag>
          <IconButton
            size="sm"
            variant="outline"
            bgColor={currentColor}
            aria-label="Color Picker"
            _hover={{ backgroundColor: currentColor }}
            onClick={onChangePickerVisibility}
          />
        </HStack>
        {input.isOpen && (
          <ColorPicker
            currentColor={currentColor}
            onChangeColor={onChangeColor}
            onClose={onCloseColorPicker}
          />
        )}
      </FormControl>
    </Box>
  );
};
