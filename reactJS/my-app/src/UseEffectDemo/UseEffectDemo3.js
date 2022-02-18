import React, { useEffect, useState } from "react";
 // Case 3: Without the second argument
 // In this case useEffect runs after every render and re — render of the component.
 
export const UseEffectDemo3 = () => {
  const [value, setValue] = useState(false);
 
  useEffect(() => {
    console.log("effect");
  });
 
  const clickHandler = () => {
    setValue((prevState) => !prevState);
  };
 
  return (
    <div>
      <h1>{value ? "hello" : "hey"}</h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )};