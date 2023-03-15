/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useEffect } from "react";
import { useTriggerState } from "../trigger";

export default {
  title: "Example",
};

const Template: React.FC = () => {
  const [state, setState] = useTriggerState({ name: "example", initial: "KKKKKKKKKKKKK" });

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
      <br />
      <br />
      <br />
      <Child />
    </center>
  );
};

const Child: React.FC = () => {
  const [state] = useTriggerState({ name: "example", initial: true });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      This is the value in the freaking child!!! look at it!!!
      <br />
      here:
      <br />
      {state}
    </div>
  );
};

export const Example = Template.bind({});
