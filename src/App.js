import React, { useState } from "react";
import './App.css';
import TodoItem from "./components/TodoItem";


const App = () => {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const addTask = () => {
    const newTask = {
      name: taskName,
      id: new Date().getTime()
    }

    const updatedList = [...taskList, newTask];

    setTaskList(updatedList);

    //Clear input
    setTaskName('');
  }

  const updateTask = () => {
    // console.log("taskList", taskList)
    // console.log("activeItem", activeItem);
    // console.log("taskName", taskName);

   const newList = [...taskList].map((taskItem) => {
      if(taskItem.id === activeItem.id) {
        // we will return the updated item
        // return {
        //   name: taskName,
        //   id: taskItem.id
        // }
        return Object.assign({}, taskItem, {
          name: taskName
        })
      }
      return taskItem;
   })

   setTaskList(newList);
   setTaskName('');
   setToggleAdd(false);
  }

  const removeItem = (itemToRemove) => {
    const newList = [...taskList].filter((item) => {
      return item.id !== itemToRemove.id
    });

    setTaskList(newList)
  }

  const onEditItem = (itemToEdit) => {
    setTaskName(itemToEdit.name)
    setToggleAdd(true);
    setActiveItem(itemToEdit);
  }
  
  return (
    <div className="app">
      <div className="app-title">TODO Application</div>
      <div className="app-task-input-container">
        <input className="customInput" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
        {
          !toggleAdd ?
          <button className="btn" onClick={addTask}><i class="fa-solid fa-plus iconBtn"/></button>
          :
          <button className="btn" onClick={updateTask}><i class="fa-regular fa-pen-to-square iconBtn"/></button>
        }
      </div>
      <div className="app-task-container">
        {
          taskList.length ? taskList.map((item) => {
            return (
              <TodoItem 
                key={item.id}
                item={item} 
                removeTodoItem={removeItem}
                editTodoItem={onEditItem}
              />
            )
          })
          :
          <div>{'No new tasks to be done.'}</div>
        }
      </div>
    </div>
  );
}
export default App;

