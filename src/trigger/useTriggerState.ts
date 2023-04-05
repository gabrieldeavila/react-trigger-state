import { useCallback, useSyncExternalStore } from "react";

export const globalState: { [key in string]: any } = new Map();
const listeners: { [key in string]: any } = new Map();

// it subscribes to the store and returns a function to unsubscribe
function subscribe(listener: any, name: string) {
  const prevListeners = listeners.get(name) ?? [];

  listeners.set(name, [...prevListeners, listener]);

  return () => {
    const prevListeners = listeners.get(name) ?? [];

    listeners.set(
      name,
      prevListeners.filter((l: any) => l !== listener)
    );
  };
}

// when a trigger changes, we emit a change event to all listeners
function emitChange(name: string) {
  // we don't want to emit a change to all listeners, only to the ones that are listening to this trigger
  const currListeners = listeners.get(name) ?? [];

  for (const listener of currListeners) {
    listener();
  }
}

// this is the hook that we export
function useTriggerState({ name, initial }: { name: string; initial?: any }) {
  // get the current value of the trigger
  const getSnapshot = useCallback(() => {
    const prevVal = globalState.get(name);

    if (prevVal == null && initial != null) {
      globalState.set(name, initial);
      emitChange(name);
    }

    const newVal = globalState.get(name);

    return newVal;
  }, [initial, name]);

  const getServerSnaptshot = useCallback(() => {
    const prevVal = globalState.get(name);

    if (prevVal == null && initial != null) {
      globalState.set(name, initial);
    }

    const newVal = globalState.get(name);
    return newVal;
  }, [initial, name]);

  // subscribe to changes in the store
  const state = useSyncExternalStore(
    (listener: any) => subscribe(listener, name),
    getSnapshot,
    getServerSnaptshot
  );

  // set the value of the trigger
  const setState = useCallback(
    (value: any) => {
      // if is a function the user wants to update the value
      // like setState((prev) => prev + 1)
      if (typeof value === "function") {
        const prevVal = globalState.get(name) ?? "";

        value = value(prevVal);
      }
      globalState.set(name, value);

      emitChange(name);
    },
    [name]
  );

  return [state, setState];
}

export default useTriggerState;

// like localstorage but for our global state
export const stateStorage = {
  get(key: string) {
    return globalState.get(key);
  },
  set(key: string, value: any) {
    globalState.set(key, value);
    emitChange(key);
  },
  remove(key: string) {
    globalState.removeItem(key);
    emitChange(key);
  },
};
