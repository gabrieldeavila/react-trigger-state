import { useCallback, useEffect, useRef } from "react";
import addState from "../../helpers/addState";

function useTrigger({
  name,
  listener,
  beforeTriggering,
}: {
  name: string;
  listener: (ev: any) => void;
  beforeTriggering?: (value: any) => Promise<any>;
}): { trigger: (value: any) => Promise<any> } {
  // event that will be dispatched
  const event = useRef<CustomEvent<{ [key in string]: any }> | null>(null);

  // useEffect to add and remove the event listener
  useEffect(() => {
    // add event listener for the event
    document.addEventListener(name, listener);

    return () => {
      // remove event listener for the event
      document.removeEventListener(name, listener);
    };
  }, [listener, name]);

  // it's used to change the value of the state
  // and dispatch its event
  const trigger = useCallback(
    async (value: any) => {
      let newValue = value;

      if (beforeTriggering != null) {
        newValue = await beforeTriggering(value);
      }

      event.current = new CustomEvent(name, {
        detail: {
          [name]: newValue,
        },
      });

      addState({ name, value: newValue });

      document.dispatchEvent(event.current);
    },
    [beforeTriggering, name]
  );

  return { trigger };
}

export default useTrigger;
