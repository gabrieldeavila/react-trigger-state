import { useCallback, useState } from "react";
import setInitialValue from "../../helpers/setInitialValue";
import useTrigger from "./useTrigger";

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
  // basic state
  const [state, setState] = useState(setInitialValue({ initial, name }));

  // it's used to change the value of the state
  const listener = useCallback(
    (ev: any) => {
      const value = ev.detail[name];
      setState(value);
    },
    [name]
  );

  // it makes sure to get the latest value of the state
  // before triggering the event
  // otherwise, if the dev used like (prev) => prev + 1
  // it would dispatch this as the value
  const beforeTriggering = useCallback(async (value: any) => {
    await setState(value);

    let newValue = value;

    await setState((prev: any) => {
      newValue = prev;
      return prev;
    });

    return newValue;
  }, []);

  const { trigger } = useTrigger({ name, listener, beforeTriggering });

  return [state, trigger];
}

export default useTriggerState;
