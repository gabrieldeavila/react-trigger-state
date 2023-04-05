/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { stateStorage, useTriggerState } from "..";

export default {
  title: "State Storage",
};

const Template: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    stateStorage.set("state_storage", e.target.value);
  };

  return (
    <center>
      <br />
      <input type="email" name="name" id="name" onChange={handleChange} />
      <Sibling />
    </center>
  );
};

const Sibling: React.FC = () => {
  const [state] = useTriggerState({ name: "state_storage" });

  return (
    <div>
      <br />

      <div>{state}</div>
    </div>
  );
};

export const StateStorage = Template.bind({});
