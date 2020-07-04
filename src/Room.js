import React, { useState } from 'react';
import './Room.css';


function Room() {
  let [islit, setlit] = useState(true);
  let [age, setage] = useState(20);
  function setState()
  {
     console.log("Button Clicked");
     setlit(!islit);
     
  }
  const setAge = ()=> {
    setage(++age);
  }
  return ( <div className={"Room " + (islit? "lit" :"dark")}>This is room component : lit = {islit? "lit":"dark"} 
  <br/>
  Age: {age};
  <br/>
  <button onClick={setState}>Toggle State</button>
  <br/>
  <button onClick={setAge}>Toggle Age</button>
  </div>
  );
}

export default Room;
