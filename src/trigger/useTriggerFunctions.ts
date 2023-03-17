import { useCallback, useRef } from "react";

const useTriggerFunction = (callback: (value: any) => void) => {
  // event that will be dispatched
  // basic state
  const callbackFunction = useCallback(callback, [callback, ...dependencies]);

  // useEffect to add and remove the event listener
  // useEffect(() => {
  //   const listener = (ev: any) => {
  //     const value = ev.detail[name];
  //     setState(value);
  //   };
  //   // add event listener for the event
  //   document.addEventListener(name, listener);
  //   return () => {
  //     // remove event listener for the event
  //     document.removeEventListener(name, listener);
  //   };
  // }, [name]);

  // // it's used to change the value of the state
  // // and dispatch its event
  // const trigger = useCallback(
  //   (value: any) => {
  //     event.current = new CustomEvent(name, {
  //       detail: {
  //         [name]: value,
  //       },
  //     });
  //     addState({ name, value });
  //     document.dispatchEvent(event.current);
  //   },
  //   [name]
  // );
  return callbackFunction;
};

export default useTriggerFunction;
