import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentCompoent() {
  const [value, setValue] = useState('');

  const updateChild = (randomValue) => {
    setValue(randomValue);
  }
  
  return (
    <div style={{background:'gold', border: '1px solid'}}>
      <div>Parent Component</div>
      <ChildComponent someText={value} updateChildComponent={updateChild}/>
    </div>
  )
}

export default ParentCompoent;