/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { useTriggerRef } from "../trigger";

export default {
  title: "Trigger Ref",
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
  const [, setRef] = useTriggerRef({ name: "ref_ex" });

  const setNewRef = () => {
    setRef(new Date());
    alert("Now, try clicking the sibling button!");
  };

  return (
    <div style={{ background: "#e2725b", padding: "2rem" }}>
      im the child
      <br />
      <button onClick={setNewRef}>
        click here to set a new Ref based in the Date
      </button>
    </div>
  );
};

const Sibling: React.FC = () => {
  const [ref] = useTriggerRef({ name: "ref_ex" });

  const getRef = () => {
    if (!ref) return alert("You need to click the child button first!");

    alert(ref);
  };

  return (
    <div style={{ background: "green", padding: "2rem" }}>
      im the sibling
      <br />
      <button onClick={getRef}>click here to see the current ref</button>
    </div>
  );
};

export const TriggerRef = Template.bind({});
