import React from "react";

const Increment = ({ count, setCount }) => {
  return (
    <button
      onClick={() => {
        return setCount(count + 1);
      }}
    >
      increment
    </button>
  );
};

export default Increment;
