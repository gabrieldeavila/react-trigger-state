const hasStorage = () => {
  return "REACT_TRIGGER_STATE" in window;
};

export default hasStorage;
