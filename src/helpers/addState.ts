import { ITriggerChangeState } from "../interfaces/trigger";
import startTrigger from "./startTrigger";

const addState = ({ name, value }: ITriggerChangeState) => {
  startTrigger();

  window.REACT_TRIGGER_STATE[name] = value;
};

export default addState;
