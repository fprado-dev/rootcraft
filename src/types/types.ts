export type ButtonsOptionsType = "btn-color" | "btn-units" | "btn-custom";
export type InputOptionsType = "colors" | "btn-units" | "btn-custom";

export type InputTypes = {
  type: ButtonsOptionsType;
  isOpen: Boolean;
  value: string;
  rem?: string;
  color?: string;
  id: string;
};
export type InputActionType = {
  type: "add-input" | "update-input" | "remove-input" | "remove-all-inputs";
  payload?: InputTypes;
};
