function TodoItem(props) {
  const { item, removeTodoItem, editTodoItem } = props; //destructuring

  const onRemove = (item) => {
    removeTodoItem(item);
  }

  const onEdit = (item) => {
    editTodoItem(item);
  }

  return (
    <div className="todo-item-card">
      <div>
        {item.name}
      </div>
      <div>
        <i class="fa-solid fa-pencil iconBtn" onClick={() => onEdit(item)}></i>
        <i class="fa-regular fa-trash-can iconBtn"  onClick={(e) => onRemove(item)}></i>
      </div>
    </div>
  );
}

export default TodoItem;