import { ITriggerState } from "../interfaces/trigger";
import addState from "./addState";

const setInitialValue = ({ name, initial }: ITriggerState) => {
  // current value (if the value is already setted in another component)
  const value = window.REACT_TRIGGER_STATE?.[name];

  // if the value is already setted
  if (value != null) {
    return value;
  } else {
    // otherwise, set the value and return the initial value
    addState({ name, value: initial });
  }

  return initial;
};

export default setInitialValue;
