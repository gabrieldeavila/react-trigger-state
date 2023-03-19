import { useCallback, useEffect, useRef } from "react";
import addState from "../helpers/addState";
import setInitialValue from "../helpers/setInitialValue";

/**
 * Returns the ref and a trigger function to change it throughout the application
 *
 * If you don't use the trigger function, all of the components that use this state will not be updated
 *
 * Therefore, always use the trigger function to change the ref value
 *
 * @example
 * // name is the value that will be used to identify the state
 * // so it must be unique
 * const [ref, trigger] = useTriggerRef({ name: "myRef", initial: "0" });
 *
 * // to change its value
 * trigger("1");
 *
 * // to get its value
 * console.log(ref.current);
 *
 * // to get its value in another component
 * const [ref, trigger] = useTriggerRef({ name: "myRef" });
 *
 * // now if anywhere in the application you change the value of the ref
 * // all of the components that use it will be updated
 */
function useTriggerRef({
  name,
  initial,
}: {
  name: string;
  initial?: any;
}): [any, (value: any) => void] {
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
