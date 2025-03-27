import React, { Component } from "react"; // useSet
import Extra from "./Extra";
import { Header, Footer, Body } from "./Components";

const Greetings = ({ nameHandler }) => {
  const arr = ["Kallal", "Alex", "Jp sir"];
  return (
    <div>
      {arr.map((name, index) => (
        <div key={index}>{nameHandler(name)}</div>
      ))}
    </div>
  );
};

const Greetings2 = ({ render }) => {
  const names = ["Kallal", "Mukherjee", "Friend"];
  return <div>{render(names)}</div>;
};

const App = () => {
  const nameHandler = (name) => `Hello, ${name}!`;

  return (
    <div>
      <Header />
      <Body />
      {/* Greetings2 example usage */}
      <Greetings2
        render={(names) =>
          names.map((name, index) => (
            <div key={index}>Hi {name}</div>
          ))
        }
      />
      {/* Greetings usage */}
      <Greetings nameHandler={nameHandler} />
      <Extra />
      <Footer />
    </div>
  );
};

export default App;

 
// const App = () => {
//   const [show , setShow ] = useState (true);
//   function changeShow(){
//     setShow(!show);
//   }
//   return 
//   <div>
//     <button onClick={changeShow} >Change</button>
//     <welcome initial={2} step={4} limit= {32}/>
//     {slow && <welcome initial={5} step={5} limit={26} />
//   </div>

// }
