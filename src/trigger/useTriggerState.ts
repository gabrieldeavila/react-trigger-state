import { useCallback, useEffect, useRef, useState } from "react";

const sessionState = (initial: any, name: string) => {
  const value = sessionStorage.getItem(name);

  if (value != null) {
    return JSON.parse(value);
  }

  return initial;
};

function useTriggerState({ name, initial }: { name: string; initial: any }) {
  const event = useRef<CustomEvent<{ [key in string]: any }> | null>(null);

  const [state, setState] = useState(sessionState(initial, name));

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

  const trigger = useCallback(
    (value: any) => {
      event.current = new CustomEvent(name, {
        detail: {
          [name]: value,
        },
      });

      sessionStorage.setItem(name, JSON.stringify(value));

      document.dispatchEvent(event.current);
    },
    [name]
  );

  return [state, trigger];
}

export default useTriggerState;
