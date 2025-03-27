import React, { useState } from "react";

// Counter Component
const Extra = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount((c) => c + 1);
  };

  const decrement = () => {
    if (count > -10) setCount((c) => c - 1);
  };

  return (
    <div>
      <h1>Make It</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
};

// Greetings Component
const Greetings = ({ nameHandler }) => {
  const arr = ["Kallal", "Alex", "Jp sir"];
  return (
    <>
      <div>Hi Kallal</div>
      <div>{nameHandler(arr)}</div>
    </>
  );
};

// Parent Component
const App = () => {
  const nameHandler = (arr) => arr.map((name) => `Hello, ${name}!`).join(" | ");

  return (
    <div>
      <Extra />
      <Greetings nameHandler={nameHandler} />
    </div>
  );
};

export default App;

import React from "react";

const Greeting = ({name = "xyz", age = 0}) => {
  return (
    <div>
      <h1>Hello , {name}</h1>
      <p>Welcome to my React app {age}!</p>

    </div>
  );
};

export default Greeting;

 

