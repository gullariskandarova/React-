import React, { useState } from "react";

const Input = ({ count, setCount }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
      <button
        onClick={() => {
          setCount(count + value);
        }}
      >
        Inc by Value
      </button>
    </>
  );
};

export default Input;
