import { useCallback, useSyncExternalStore } from "react";

let triggers: { [key in string]: any } = {};
let listeners: any[] = [];

function subscribe(listener: any) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function useTriggerState({ name, initial }: { name: string; initial?: any }) {
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

  const state = useSyncExternalStore(subscribe, getSnapshot);

  const setState = useCallback(
    (value: any) => {
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
