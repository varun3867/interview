import React, { useState, useEffect } from "react";
 
// Case 1: Array with few Dependencies
// The “effect” will log in the console —
// 1) For the very first time when the component is rendered 
//      (because for the very first time value of dependencies value1 and 
//     value2 seem to be changed to react).
// 2)Again if any of the states of value1 or value2 will be changed but not
//   if the state of value3 is changed.

export const UseEffectDemo = () => {
  const [value1, setValue1] = useState("VALUE 1");
  const [value2, setValue2] = useState("VALUE 2");
  const [value3, setValue3] = useState("VALUE 3");
 
  useEffect(() => {
    console.log("effect");
  }, [value1, value2]);
 
  const clickHandler1 = () => {
    setValue1((prevState) => prevState + "VALUE 1");
  };
  const clickHandler2 = () => {
    setValue2((prevState) => prevState + "VALUE 2");
  };
  const clickHandler3 = () => {
    setValue3((prevState) => prevState + "VALUE 3");
  };
  return (
    <div>
      <p onClick={clickHandler1}>{value1}</p>
      <p onClick={clickHandler2}>{value2}</p>
      <p onClick={clickHandler3}>{value3}</p>
    </div>
  );
};