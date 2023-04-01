/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { useTriggerState } from "../trigger";

export default {
  title: "Simple Example State",
};

const Template: React.FC = () => {
  return (
    <center>
      <br />
      <br />
      <br />

      <Child />
      <br />
      <br />
      <Sibling />
      <br />
      <br />
    </center>
  );
};

const Child: React.FC = () => {
  const [, setState] = useTriggerState({ name: "example" });

  const handleChange = () => {
    setState(new Date());
    alert("Value setted! Try clicking in the sibling button!");
  };

  return (
    <div style={{ background: "#e2725b", padding: "2rem" }}>
      im the child
      <br />
      <button onClick={handleChange}>click here to set the current date</button>
    </div>
  );
};

const Sibling: React.FC = () => {
  const [state] = useTriggerState({ name: "example" });

  const getRef = () => {
    if (!state) return alert("You need to click the child button first!");
    alert(state);
  };

  return (
    <div style={{ background: "green", padding: "2rem" }}>
      im the sibling
      <br />
      <button onClick={getRef}>click here to see the current ref</button>
    </div>
  );
};

export const SimpleExampleState = Template.bind({});
