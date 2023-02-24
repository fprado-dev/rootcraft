import { InputTypes, InputActionType } from "../types/types";

export function inputsReducer(state: InputTypes[], action: InputActionType) {
  switch (action.type) {
    case "add-input":
      return [
        ...state.map((item: InputTypes) => {
          return { ...item, isOpen: false };
        }),
        action.payload
      ];
    case "update-input":
      return state.map((item: InputTypes) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isOpen: !item.isOpen
          };
        } else {
          return { ...item, isOpen: false };
        }
      });
    case "remove-input":
      return state.filter((item: InputTypes) => item.id !== action.payload.id);
    default:
      throw new Error();
  }
}
