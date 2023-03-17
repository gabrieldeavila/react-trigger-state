/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { useTriggerState } from "../trigger";
import useTriggerCallback from "../trigger/useTriggerFunctions";

export default {
  title: "Callback",
};

const Template: React.FC = () => {
  const [state, setState] = useTriggerCallback(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <center>
      <br />
      <br />
      <br />
      <input value={state} onChange={handleChange} />
      <br />
      <br />

      <label htmlFor="check">Show / hide </label>
      <input
        id="check"
        type="checkbox"
        checked={hide}
        onChange={() => setHide((prev: boolean) => !prev)}
      />
      <br />
      <br />

      {!hide && <Child />}
    </center>
  );
};

const Child: React.FC = () => {
  const [state] = useTriggerState({ name: "example", initial: true });

  return (
    <div>
      <i>this is the children&#39;s value:</i>
      <br />
      <br />
      <strong>{state}</strong>
    </div>
  );
};

export const Callback = Template.bind({});
