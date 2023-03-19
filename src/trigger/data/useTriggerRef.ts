import { useCallback, useRef } from "react";
import setInitialValue from "../../helpers/setInitialValue";
import useTrigger from "./useTrigger";

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
  // basic state
  const ref = useRef(setInitialValue({ initial, name }));

  // it's used to get the changes of the state
  const listener = useCallback(
    (ev: any) => {
      const value = ev.detail[name];
      ref.current = value;
    },
    [name]
  );

  const { trigger } = useTrigger({ name, listener });

  return [ref, trigger];
}

export default useTriggerRef;
