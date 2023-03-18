import { useEffect, useRef } from "react";
import addState from "../../helpers/addState";

const useTriggerFunction = ({
  name,
  share,
}: {
  name: string;
  share: (value: any) => void;
}): void => {
  const event = useRef<CustomEvent<{ [key in string]: any }> | null>(null);

  // it's used to change the value of the state
  // and dispatch its event
  useEffect(() => {
    event.current = new CustomEvent(name, {
      detail: {
        [name]: share,
      },
    });

    addState({ name, value: share });

    document.dispatchEvent(event.current);
  }, [name, share]);
};

export default useTriggerFunction;