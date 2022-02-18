import React, { useState, useEffect } from "react";
 // Case 2: Arrays with no dependencies
 // 1)  The “effect” will be logged only when the component is rendered 
 //     very first time. It will not run if “the state of value” is changed 
 //     (the component will re-render but still the useEffect won’t run).

 // 2)  For the very first time useEffect runs after component evaluation 
//      because you had no dependencies before. But once it ran for the very 
//      first time, now it has no dependencies but also 
 //     they didn’t change compared to the first execution cycle.  

export const UseEffectDemo2 = () => {
  const [value, setValue] = useState("VALUE");
 
  useEffect(() => {
    console.log("effect");
  }, []);
 
  const clickHandler = () => {
   setValue((prevState) => prevState + "VALUE");
  };
console.log("came")
  return (
      
    <div>
      <p onClick={clickHandler}>{value}</p>
    </div>
  );
};