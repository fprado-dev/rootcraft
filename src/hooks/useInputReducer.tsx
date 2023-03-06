import { useReducer } from "react";
import {
  InputActionType,
  InputTypes,
  ButtonsOptionsType
} from "@rootcraft/types";

import { inputsReducer } from "@rootcraft/reducers";
import { generateUniqueId } from "@rootcraft/utils";

export const useInputReducer = () => {
  const [inputList, dispatch] = useReducer<
    (state: InputTypes[], action: InputActionType) => InputTypes[]
  >(inputsReducer, []);

  const onAdd = (type: ButtonsOptionsType) => {
    dispatch({
      type: "add-input",
      payload: {
        id: generateUniqueId(),
        isOpen: false,
        color: "",
        value: "",
        rem: "",
        type
      }
    });
  };

  const onRemove = (input: InputTypes) => {
    dispatch({
      type: "remove-input",
      payload: {
        ...input
      }
    });
  };

  const onUpdate = (input: InputTypes) => {
    dispatch({
      type: "update-input",
      payload: {
        ...input
      }
    });
  };
  const onRemoveAll = () => {
    dispatch({
      type: "remove-all-inputs"
    });
  };
  return {
    inputList,
    onAdd,
    onRemove,
    onUpdate,
    onRemoveAll
  };
};
