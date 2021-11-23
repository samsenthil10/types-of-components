import React from "react";

export default ({ name }) => {
  return (
    <>
      {console.log("CustomLabel component render")}
      <label>
        <b>{name}</b>
      </label>
    </>
  );
};