/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from "react";
import { globalState } from "..";

export default {
  title: "Global State",
};

const Template: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    globalState.set("name", e.target.value);
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
  const getRef = () => {
    alert(globalState.get("name"));
  };

  const getAll = () => {
    alert("See the console");
    console.log(globalState);
  };

  return (
    <div>
      <br />
      <button onClick={getRef}>get this page val</button>
      <br />
      <button onClick={getAll}>get all</button>
    </div>
  );
};

export const GlobalState = Template.bind({});
