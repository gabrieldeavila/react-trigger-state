import { ITriggerChangeState } from "../interfaces/trigger";

const addState = ({ name, value }: ITriggerChangeState) => {
  const hasStorage = "REACT_TRIGGER_STATE" in window;

  if (!hasStorage) window.REACT_TRIGGER_STATE = {};

  window.REACT_TRIGGER_STATE[name] = value;
};

export default addState;
