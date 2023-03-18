/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { useTriggerState } from "../trigger";
import useTriggerRef from "../trigger/useTriggerRef";

export default {
  title: "Trigger Ref",
};

const Template: React.FC = () => {
  const [ref, setRef] = useTriggerRef({
    name: "ref_ex",
    initial: "Try Changing This",
  });

  const [hide, setHide] = useTriggerState({
    name: "hide",
    initial: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRef(e.target.value);
  };

  return (
    <center>
      <br />
      <br />
      <br />
      <input onChange={handleChange} />
      <br />
      <p>
        value: <strong>{ref.current}</strong>
      </p>
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
    alert(ref.current);
  };

  return (
    <div>
      <button onClick={getRef}>
        <i>click here to get the children&#39;s value</i>
      </button>
    </div>
  );
};

export const TriggerRef = Template.bind({});
