import { useEffect, useState } from "react";
import setInitialValue from "../../helpers/setInitialValue";

/**
 * Returns a function that was dispatched by the useTriggerFunction hook
 */
const useGetFunction = ({ name }: { name: string }): (() => void) => {
  const [state, setState] = useState(() =>
    setInitialValue({ initial: () => {}, name })
  );

  // event that will be dispatched
  // basic state
  // useEffect to add and remove the event listener
  useEffect(() => {
    const listener = (ev: any) => {
      const value = ev.detail[name];
      setState(() => value);
    };

    // add event listener for the event
    document.addEventListener(name, listener);
    return () => {
      // remove event listener for the event
      document.removeEventListener(name, listener);
    };
  }, [name]);

  return state;
};

export default useGetFunction;
