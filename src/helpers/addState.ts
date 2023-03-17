import startTrigger from "./startTrigger";

const addState = ({ name, value }: { name: string; value: any }) => {
  startTrigger();

  window.REACT_TRIGGER_STATE[name] = value;
};

export default addState;
