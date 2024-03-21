import React, { useContext, useState } from "react";
import TodoItem from "../components/TodoItem";
import ChildComponent1 from "../components/ChildComponent1";
import ChildComponent2 from "../components/ChildComponent2";
import TodoContext from "../context/TodoContext";

function TodoContainer() {
  const { taskName, setTaskName } = useContext(TodoContext);
  const [taskList, setTaskList] = useState([]);
  const [originalTaskList, setOriginalTaskList] = useState([]);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const addTask = () => {
    const newTask = {
      name: taskName,
      id: new Date().getTime(),
      completed: false,
    };

    const updatedList = [...taskList, newTask];

    setTaskList(updatedList);
    setOriginalTaskList(updatedList);

    // Clear input
    setTaskName("");
  };

  const updateTask = () => {
    const newList = taskList.map((taskItem) => {
      if (taskItem.id === activeItem.id) {
        return {
          ...taskItem,
          name: taskName,
        };
      }
      return taskItem;
    });

    setTaskList(newList);
    setOriginalTaskList(newList);
    setTaskName("");
    setToggleAdd(false);
  };

  const removeItem = (itemToRemove) => {
    const newList = taskList.filter((item) => {
      return item.id !== itemToRemove.id;
    });

    setTaskList(newList);
    setOriginalTaskList(newList); // Changed 'newlist' to 'newList'
  };

  const onEditItem = (itemToEdit) => {
    setTaskName(itemToEdit.name);
    setToggleAdd(true);
    setActiveItem(itemToEdit);
  };

  const removeAllTasks = () => {
    if (taskList.length) {
      setTaskList([]);
      setOriginalTaskList([]);
    }
  };

  const markAsCompleted = (item) => {
    const newList = taskList.map((taskItem) => {
      if (taskItem.id === item.id) {
        return {
          ...taskItem,
          completed: true,
        };
      }
      return taskItem;
    });

    setTaskList(newList);
    setOriginalTaskList(newList);
  };

  const onFilter = (e) => {
    const filterStr = e.target.value;
    let newList = [...originalTaskList]; // Use originalTaskList here

    if (filterStr === "Completed") {
      newList = newList.filter((item) => {
        return item.completed;
      });
    }

    setTaskList(newList); // Moved this inside the conditional block
  };

  return (
    <>
      <div className="app-title">TODO Application</div>
      <div className="app-task-input-container">
        <input
          className="customInput"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        {!toggleAdd ? (
          <button className="btn" onClick={addTask}>
            <i className="fa-solid fa-plus iconBtn" />
          </button>
        ) : (
          <button className="btn" onClick={updateTask}>
            <i className="fa-regular fa-pen-to-square iconBtn" />
          </button>
        )}
      </div>
      <select onChange={onFilter}>
        <option>ALL</option>
        <option>Completed</option>
      </select>
      <div className="app-task-container">
        {taskList.length ? (
          taskList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodoItem={removeItem}
                editTodoItem={onEditItem}
                onMarkItemComplete={markAsCompleted}
              />
            );
          })
        ) : (
          <div>{"No new tasks to be done."}</div>
        )}
      </div>
      {taskList.length ? (
        <button className="btn removeBtn" onClick={removeAllTasks}>
          Remove All
        </button>
      ) : null}

      <ChildComponent1 name={taskName} />
      <ChildComponent2 />
    </>
  );
}

export default TodoContainer;
