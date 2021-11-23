import React, { useState } from "react";
import CustomLabel from "./CustomLabel";
import HigherOrderComponent from "./HigherOrderComponent";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <HigherOrderComponent name="Simple Counter app label with hoc" />
      <CustomLabel name="Simple Counter app label without hoc" />
      <p>Counter is : {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};
export default CounterComponent;