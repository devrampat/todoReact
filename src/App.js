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
      id: new Date().getTime(),
      completed: false
    }

    const updatedList = [...taskList, newTask];

    setTaskList(updatedList);

    //Clear input
    setTaskName('');
  }

  const updateTask = () => {
   const newList = [...taskList].map((taskItem) => {
      if(taskItem.id === activeItem.id) {
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

  const removeAllTasks = () => {
    console.log(taskList);
    if(taskList.length) {
      setTaskList([]);
    }
  }

  const markAsCompleted = (item) => {
    //update the task list array
    const newList = [...taskList].map((taskItem) => {
      if(taskItem.id === item.id) {
        return Object.assign({}, taskItem, {
          completed: true
        })
      }
      return taskItem;
   })

   setTaskList(newList);
  }

  const onFilter = (e) => {
    const filterStr = e.target.value;
    if(filterStr === 'Completed') {

    } else {
      
    }
  }
  
  return (
    <div className="app">
      <div className="app-title">TODO Application</div>
      <div className="app-task-input-container">
        <input className="customInput" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
        
        {
          !toggleAdd ?
          <button className="btn" onClick={addTask}><i className="fa-solid fa-plus iconBtn"/></button>
          :
          <button className="btn" onClick={updateTask}><i className="fa-regular fa-pen-to-square iconBtn"/></button>
        }
        
      </div>
      <select onChange={onFilter}>
          <option>ALL</option>
          <option>Completed</option>
        </select>
      <div className="app-task-container">
        {
          taskList.length ? taskList.map((item) => {
            return (
              <TodoItem 
                key={item.id}
                item={item} 
                removeTodoItem={removeItem}
                editTodoItem={onEditItem}
                onMarkItemComplete={markAsCompleted}
              />
            )
          })
          :
          <div>{'No new tasks to be done.'}</div>
        }
      </div>
      {taskList.length ? <button className="btn removeBtn" onClick={removeAllTasks}>Remove All</button> : null}
    </div>
  );
}
export default App;

