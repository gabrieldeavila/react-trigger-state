import { useEffect, useState } from "react";
import setInitialValue from "../../helpers/setInitialValue";

/**
 * Returns a function that was dispatched by the ```useTriggerFunction``` hook
 *
 * @example
 * const myFunction = useGetFunction({ name: "myFunction" });
 *
 * myFunction();
 */
const useGetFunction = ({ name }: { name: string }): (() => void) => {
  const [state, setState] = useState(() => () => {});

  // there is an issue that the component is mounted before the event listener is added
  // but at the same time we don't have the initial value of the function yet
  // so we need to wait for the component to be mounted before we set the initial state
  useEffect(() => {
    function defineFirstState() {
      setTimeout(() => {
        setState(() => setInitialValue({ initial: () => {}, name }));
      });
    }

    defineFirstState();
  }, [name, state]);

  // useEffect to add and remove the event listener
  useEffect(() => {
    const listener = (ev: any) => {
      console.log("aaaa");

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
