/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useCallback } from "react";
import { useTriggerFunction } from "../trigger";
import useGetFunction from "../trigger/function/useGetFunction";

export default {
  title: "Function",
};

const Template: React.FC = () => {
  return (
    <center>
      <br />
      <br />
      <br />
      <Child />
      <Sibling />
    </center>
  );
};

const Child: React.FC = () => {
  const myFirstFunction = useCallback(() => {
    // your complex logic here
    alert("wow, im a function!");
  }, []);

  useTriggerFunction({
    name: "my_first_function",
    share: myFirstFunction,
  });

  return <div className="App">yep im the child</div>;
};

const Sibling: React.FC = () => {
  const myFirstFunction = useGetFunction({ name: "my_first_function" });

  return (
    <div className="App">
      <p>Wow thats magic!</p>
      <button onClick={myFirstFunction}>
        Click me to access my sibling function!
      </button>
      <br />
    </div>
  );
};
export const Function = Template.bind({});
