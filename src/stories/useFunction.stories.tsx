/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useCallback, useState } from "react";
import { useTriggerFunction } from "../trigger";
import useGetFunction from "../trigger/function/useGetFunction";

export default {
  title: "Function",
};

const Template: React.FC = () => {
  // im not using the trigger state here because i want to show you how to use the callback
  // and it is not necessary to use the trigger state here
  const [state, setState] = useState("Type here to change the value");

  const test = useCallback(() => {
    console.log(state);
    alert(state);
  }, [state]);

  useTriggerFunction({
    name: "test",
    share: test,
  });

  return (
    <center>
      <br />
      <br />
      <i>this is the father</i>
      <br />
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <br />
      <br />
      <br />
      <br />
      <Child />
    </center>
  );
};

const Child: React.FC = () => {
  const test = useGetFunction({ name: "test" });

  return (
    <div>
      <i>this is the children</i>
      <br />
      <button onClick={test}>Click to get the value of the parent</button>
    </div>
  );
};
export const Function = Template.bind({});
