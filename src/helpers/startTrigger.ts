import hasStorage from "./hasStorage";

const startTrigger = () => {
  if (!hasStorage()) window.REACT_TRIGGER_STATE = {};
};

export default startTrigger;
