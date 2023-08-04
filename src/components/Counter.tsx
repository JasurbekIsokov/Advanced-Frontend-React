import React, { useState } from "react";

import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const counter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="counterBtn" onClick={counter}>
        Counter
      </button>
    </>
  );
};

export default Counter;
