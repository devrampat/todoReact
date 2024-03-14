import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function ChildComponent2() {
  const { taskName } = useContext(TodoContext);
  return (
    <div style={{background:'lightgreen', border: '1px solid red'}}>
      <div>Child Component 2</div>
      <div>{`Task Name: ${taskName}`}</div>
    </div>
  )
}

export default ChildComponent2;