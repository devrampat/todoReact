import React from "react";
import './App.css';
import TodoContainer from "./containers/TodoContainer";
import TodoContextProvider from "./context/TodoContextProvider";
// import Counter from "./components/Counter";



const App = () => {
  // const [showCounter, setShowCounter] = useState(false);
  
  return (
    <div className="app">
      {/* <button onClick={() => setShowCounter(false)}>Hide Counter Component</button> */}
      {/* {showCounter && <Counter/>} */}
      <TodoContextProvider>
        <TodoContainer/>
      </TodoContextProvider>
    </div>
  );
}
export default App;

