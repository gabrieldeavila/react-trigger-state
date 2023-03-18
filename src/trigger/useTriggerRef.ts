import { useCallback, useEffect, useRef } from "react";
import addState from "../helpers/addState";
import setInitialValue from "../helpers/setInitialValue";
import { ITriggerState } from "../interfaces/trigger";

function useTriggerRef({
  name,
  initial,
}: ITriggerState): [any, (value: any) => void] {
  // event that will be dispatched
  const event = useRef<CustomEvent<{ [key in string]: any }> | null>(null);

  // basic state
  const ref = useRef(setInitialValue({ initial, name }));

  // useEffect to add and remove the event listener
  useEffect(() => {
    const listener = (ev: any) => {
      const value = ev.detail[name];
      ref.current = value;
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
    (value: any) => {
      event.current = new CustomEvent(name, {
        detail: {
          [name]: value,
        },
      });

      addState({ name, value });

      document.dispatchEvent(event.current);
    },
    [name]
  );

  return [ref, trigger];
}

export default useTriggerRef;
