import { useCallback, useEffect, useRef, useState } from "react";
import addState from "../helpers/addState";
import setInitialValue from "../helpers/setInitialValue";

/**
 * Returns a state and a trigger function to change it throughout the application
 *
 * @example
 * // name is the value that will be used to identify the state
 * // so it must be unique
 * const [state, trigger] = useTriggerState({ name: "myState", initial: "0" });
 *
 * // to change its value
 * trigger("1");
 *
 * // to get its value
 * console.log(state);
 *
 * // to get its value in another component
 * const [state, trigger] = useTriggerState({ name: "myState" });
 *
 * // now if anywhere in the application you change the value of the state
 * // all of the components that use it will be updated
 */
function useTriggerState({
  name,
  initial,
}: {
  name: string;
  initial?: any;
}): [any, (value: any) => void] {
  // event that will be dispatched
  const event = useRef<CustomEvent<{ [key in string]: any }> | null>(null);

  // basic state
  const [state, setState] = useState(setInitialValue({ initial, name }));

  // useEffect to add and remove the event listener
  useEffect(() => {
    const listener = (ev: any) => {
      const value = ev.detail[name];
      setState(value);
    };

    // add event listener for the event
    document.addEventListener(name, listener);

    return () => {
      // remove event listener for the event
      document.removeEventListener(name, listener);
    };
  }, [name]);

  // it's used to change the value of the state
  // and dispatch its event
  const trigger = useCallback(
    async (value: any) => {
      await setState(value);

      let newValue = value;

      await setState((prev: any) => {
        newValue = prev;

        return prev;
      });

      event.current = new CustomEvent(name, {
        detail: {
          [name]: newValue,
        },
      });

      addState({ name, value });

      document.dispatchEvent(event.current);
    },
    [name]
  );

  return [state, trigger];
}

export default useTriggerState;
