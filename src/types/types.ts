export type ButtonsOptionsType =
  | "btn-color"
  | "btn-metrics"
  | "btn-units"
  | "btn-custom";

export type InputTypes = {
  type: ButtonsOptionsType;
  isOpen: Boolean;
  id: string;
};
export type InputActionType = {
  type: "add-input" | "update-input" | "remove-input";
  payload: InputTypes;
};
