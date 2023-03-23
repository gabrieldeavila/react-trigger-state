/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { useTriggerState } from "../trigger";

export default {
  title: "Trigger State",
};

const Template: React.FC = () => {
  const [hide, setHide] = useTriggerState({
    name: "hide",
    initial: false,
  });

  return (
    <center>
      <br />

      <label htmlFor="check">Show / hide input </label>
      <input
        id="check"
        type="checkbox"
        checked={hide}
        onChange={() => setHide((prev: boolean) => !prev)}
      />
      <br />
      {!hide && <Child />}

      <Sibling />
    </center>
  );
};

const Child: React.FC = () => {
  const [state, setState] = useTriggerState({
    name: "example",
    initial: "Try Changing This",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div>
      <br />
      <input value={state} onChange={handleChange} />
      <br />
    </div>
  );
};

const Sibling: React.FC = () => {
  const [state] = useTriggerState({ name: "example" });

  return (
    <div>
      <br />
      sibling value:
      <strong>{state}</strong>
    </div>
  );
};

export const TriggerState = Template.bind({});
