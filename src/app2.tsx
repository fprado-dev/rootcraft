import React, { useReducer, useState, useRef, MouseEvent } from "react";
import { SketchPicker } from "react-color";
import CloseIcon from "./assets/x-circle.svg";

import "./App.css";
import {
  Stack,
  Button,
  Input,
  InputGroup,
  IconButton,
  Box,
  CloseButton
} from "@chakra-ui/react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "add":
      return [
        ...state.map((item: any) => {
          return { ...item, isOpen: false };
        }),
        action.payload
      ];
    case "update":
      return state.map((item: any) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isOpen: !item.isOpen
          };
        } else {
          return { ...item, isOpen: false };
        }
      });
    case "remove":
      return state.filter((item: any) => item.id !== action.payload.id);
    default:
      throw new Error();
  }
}

function generateUniqueId(): string {
  const timestamp = Date.now().toString(36); // Convert current time to base-36 string
  const randomNum = Math.random()
    .toString(36)
    .substr(2, 5); // Generate random base-36 string
  return `${timestamp}-${randomNum}`; // Combine timestamp and random number
}

function App() {
  const [items, dispatch] = useReducer(reducer, []);

  const addItem = () => {
    dispatch({
      type: "add",
      payload: {
        hex: "#ccc",
        isOpen: false,
        id: generateUniqueId()
      }
    });
  };

  const handleItem = (id: string) => {
    dispatch({
      type: "update",
      payload: {
        id
      }
    });
  };

  const handleRemoveItem = (id: string) => {
    dispatch({
      type: "remove",
      payload: {
        id
      }
    });
  };
  return (
    <Box h="100%">
      <Stack
        direction="row"
        spacing={4}
        align="center"
        mt={6}
        paddingLeft={4}
        paddingRight={4}
      >
        <Button
          borderRadius={6}
          fontSize=".8rem"
          fontWeight="normal"
          size="sm"
          colorScheme="gray"
          onClick={addItem}
        >
          Colors
        </Button>
        <Button
          borderRadius={6}
          fontSize=".8rem"
          fontWeight="normal"
          size="sm"
          colorScheme="gray"
          onClick={addItem}
        >
          Metrics
        </Button>

        <Button
          borderRadius={6}
          fontSize=".8rem"
          fontWeight="normal"
          size="sm"
          colorScheme="gray"
          onClick={addItem}
        >
          Units
        </Button>
      </Stack>

      <Stack spacing={3} w="md" direction="column" mt={4} p={4}>
        {items.map((item: any, index: number) => (
          <ColorPickerButton
            onClick={handleItem}
            onRemove={handleRemoveItem}
            item={item}
            key={index}
          />
        ))}
      </Stack>

      <Stack spacing={3} w="md" direction="column" mt={4} p={4}></Stack>
    </Box>
  );
}

export default App;

type ColorPickerButtonProps = {
  item: any;
  onClick: (id: string) => void;
  onRemove: (id: string) => void;
};

export const ColorPickerButton = ({
  item,
  onClick,
  onRemove
}: ColorPickerButtonProps) => {
  const refColorPicker = useRef(null);
  refColorPicker;
  const [currentColor, setCurrentColor] = useState("#8FBC94");

  const handleColorPickVisibility = () => {
    onClick(item.id);
  };

  const handleExcludeItem = () => {
    onRemove(item.id);
  };

  const handleClosePicker = () => {
    onClick(item.id);
  };

  const handleColorChange = (color: any) => {
    setCurrentColor(color.hex);
  };

  return (
    <Box>
      <InputGroup position="relative" key={item.id} gap={1} alignItems="center">
        <IconButton
          size="xs"
          variant="solid"
          _hover={{ backgroundColor: currentColor }}
          bgColor={currentColor}
          aria-label="Color Picker"
          onClick={handleColorPickVisibility}
        />
        <Input
          paddingLeft={2}
          paddingRight={4}
          fontSize="xs"
          borderRadius={6}
          colorScheme="blackAlpha"
          variant="outline"
          size="xs"
          maxW="15rem"
        />

        <CloseButton
          size="sm"
          variant="solid"
          aria-label="Teste 2"
          onClick={handleExcludeItem}
        />
        {item.isOpen && (
          <Box
            position="absolute"
            w="100%"
            bgColor="blue.900"
            top={0}
            id="teste-id"
          >
            <Box
              position="absolute"
              top={0}
              display="flex"
              flexDirection="column"
              gap={1}
            >
              <IconButton
                size="xs"
                variant="ghost"
                borderRadius="50%"
                alignSelf="flex-end"
                aria-label="Teste 1"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    stroke="black"
                    fill="none"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                }
                onClick={handleClosePicker}
              />
              <SketchPicker
                ref={refColorPicker}
                onChange={handleColorChange}
                disableAlpha
                color={currentColor}
                presetColors={[
                  "#8FBC94",
                  "#D4DFE6",
                  "#F68657",
                  "#d3e0f7",
                  "#353848",
                  "#EE2560",
                  "#87314e"
                ]}
              />
            </Box>
          </Box>
        )}
      </InputGroup>
    </Box>
  );
};
