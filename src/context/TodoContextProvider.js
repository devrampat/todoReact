import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children}) => {
  const [taskName, setTaskName] = useState("");

  return (
    <TodoContext.Provider value={{
      taskName,
      setTaskName
    }}>
      {children}
    </TodoContext.Provider>
  )
}
export default TodoContextProvider;