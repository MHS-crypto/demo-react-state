import React, { useState } from 'react';


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
  return ( <div>This is room component : lit = {islit? "lit":"dark"} 
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
