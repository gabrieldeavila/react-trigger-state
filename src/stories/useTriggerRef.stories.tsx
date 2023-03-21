/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { useTriggerRef, useTriggerState } from "../trigger";

export default {
  title: "Trigger Ref",
};

const Template: React.FC = () => {
  const [ref, setRef] = useTriggerRef({
    name: "ref_ex",
    initial: {},
  });

  const [value, setValue] = useTriggerRef({
    name: "value",
    initial: {},
  });

  const [hide, setHide] = useTriggerState({
    name: "hide",
    initial: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ref.current[e.target.name] = e.target.value;
    setValue((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    setRef(ref.current);
  };

  return (
    <center>
      <br />
      <br />
      <br />
      Name:
      <input value={value.name} onChange={handleChange} name="name" />
      <br />
      Email:
      <input
        value={value.email}
        onChange={handleChange}
        type="email"
        name="email"
      />
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
  const [ref] = useTriggerRef({ name: "ref_ex", initial: true });

  const getRef = () => {
    console.log(ref.current);
    alert(JSON.stringify(ref.current));
  };

  return (
    <div>
      <button onClick={getRef}>
        <i>click here to get the ref&#39;s value</i>
      </button>
    </div>
  );
};

export const TriggerRef = Template.bind({});
