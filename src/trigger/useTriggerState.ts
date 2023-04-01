import { useCallback, useSyncExternalStore } from "react";

let triggers: { [key in string]: any } = {};
let listeners: any[] = [];

// it subscribes to the store and returns a function to unsubscribe
function subscribe(listener: any) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

// when a trigger changes, we emit a change event to all listeners
function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

// this is the hook that we export
function useTriggerState({ name, initial }: { name: string; initial?: any }) {
  // get the current value of the trigger
  const getSnapshot = useCallback(() => {
    if (triggers[name] == null && initial != null) {
      triggers = {
        ...triggers,
        [name]: initial,
      };
      emitChange();
    }

    return triggers[name];
  }, [initial, name]);

  // subscribe to changes in the store
  const state = useSyncExternalStore(subscribe, getSnapshot);

  // set the value of the trigger
  const setState = useCallback(
    (value: any) => {
      // if is a function the user wants to update the value
      // like setState((prev) => prev + 1)
      if (typeof value === "function") {
        value = value(triggers[name]);
      }

      triggers = {
        ...triggers,
        [name]: value,
      };

      emitChange();
    },
    [name]
  );

  return [state, setState];
}

export default useTriggerState;
