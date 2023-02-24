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
    <Box paddingLeft={4} paddingRight={4} h="100%">
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
          Dimensions
        </Button>

        <Button
          borderRadius={6}
          fontSize=".8rem"
          fontWeight="normal"
          size="sm"
          colorScheme="gray"
          onClick={addItem}
        >
          Sizes
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

  const handleCloseOverlay = (event: any) => {
    // event.stopPropagation();
    console.log(event.target.id);
    // onClick(item.id);
  };
  return (
    <Box>
      <InputGroup position="relative" key={item.id} gap={1} alignItems="center">
        <IconButton
          size="sm"
          variant="ghost"
          aria-label="Color Picker"
          onClick={handleColorPickVisibility}
          icon={
            <CloseButton
              variant="unstyled"
              _hover={{ backgroundColor: "transparent" }}
              size="sm"
              aria-label="Teste 2"
              onClick={handleExcludeItem}
            />
          }
        />

        <Input
          paddingLeft={2}
          paddingRight={4}
          fontSize="xs"
          borderRadius={6}
          colorScheme="blackAlpha"
          variant="outline"
          size="sm"
          maxW="25rem"
        />

        <IconButton
          size="sm"
          variant="ghost"
          // borderRadius="50%"
          aria-label="Color Picker"
          onClick={handleColorPickVisibility}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill={currentColor}
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
              ></path>
            </svg>
          }
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
              right="-14rem"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
