import { InputTypes, InputActionType } from "../types/types";

export function inputsReducer(
  state: InputTypes[],
  action: InputActionType
): InputTypes[] | [] {
  switch (action.type) {
    case "add-input":
      return [...state, action.payload!];
    case "update-input":
      return state.map((item: InputTypes) => {
        if (item.id === action.payload!.id) {
          return {
            ...item,
            ...action.payload
          };
        } else {
          return { ...item };
        }
      });
    case "remove-input":
      return state.filter((item: InputTypes) => item.id !== action.payload!.id);
    case "remove-all-inputs":
      return [];
    default:
      throw new Error();
  }
}
