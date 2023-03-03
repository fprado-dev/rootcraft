import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { SketchPicker, ColorResult } from "react-color";
import { PRESET_COLORS_PICKER } from "../../constants/constants";

type ColorPickerProps = {
  onChangeColor: (
    color: ColorResult,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onClose: () => void;
  currentColor: string;
};
function ColorPicker({
  onChangeColor,
  onClose,
  currentColor
}: ColorPickerProps) {
  return (
    <Box
      position="absolute"
      top="calc(50% + 15px)"
      left="calc(25% + 4px)"
      id="teste-id"
      zIndex="dropdown"
    >
      <Box display="flex" flexDir="column" gap={1}>
        <IconButton
          variant="ghost"
          _hover={{ backgroundColor: "rgba(216,216,216, .3)" }}
          alignSelf="flex-start"
          aria-label="Icon Color Button"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke="black"
              fill="none"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          }
          onClick={onClose}
        />
        <SketchPicker
          onChange={onChangeColor}
          disableAlpha
          color={currentColor}
          presetColors={PRESET_COLORS_PICKER}
        />
      </Box>
    </Box>
  );
}

export default ColorPicker;
