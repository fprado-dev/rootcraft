import { useReducer } from "react";
import {
  InputActionType,
  InputTypes,
  ButtonsOptionsType
} from "../types/types";

import { inputsReducer } from "../reducers/reducers";
import { generateUniqueId } from "../utils";

export const useInputReducer = () => {
  const [inputList, dispatch] = useReducer<
    (state: InputTypes[], action: InputActionType) => InputTypes[]
  >(inputsReducer, []);

  const add = (type: ButtonsOptionsType) => {
    dispatch({
      type: "add-input",
      payload: {
        id: generateUniqueId(),
        isOpen: false,
        type
      }
    });
  };

  const remove = (input: InputTypes) => {
    dispatch({
      type: "remove-input",
      payload: {
        ...input
      }
    });
  };

  const update = (input: InputTypes) => {
    dispatch({
      type: "update-input",
      payload: {
        ...input
      }
    });
  };

  return {
    inputList,
    add,
    remove,
    update
  };
};
