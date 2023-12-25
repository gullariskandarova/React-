import { useState } from "react";
import "./App.css";
import DecrementBtn from "./assets/component/counter/dec/decrementBtn";
import Increment from "./assets/component/counter/inc/increment";
import Input from "./assets/component/counter/input/input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <Increment count={count} setCount={setCount} />
      <h2>{count}</h2>
      <DecrementBtn count={count} setCount={setCount} />
      <hr />
      <Input count={count} setCount={setCount} />
    </>
  );
}

export default App;
