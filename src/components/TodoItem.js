function TodoItem(props) {
  const { item, removeTodoItem, editTodoItem, onMarkItemComplete } = props; //destructuring

  const onRemove = (item) => {
    removeTodoItem(item);
  }

  const onEdit = (item) => {
    editTodoItem(item);
  }

  const onMark = (item) => {
    onMarkItemComplete(item);
  }

  return (
    <div className="todo-item-card">
      <div className={item.completed ? 'complete': ''}>
        {item.name}
      </div>
      <div>
        {!item.completed && <i class="fa-solid fa-pencil iconBtn" onClick={() => onEdit(item)}></i>}
        <i class="fa-regular fa-trash-can iconBtn"  onClick={(e) => onRemove(item)}></i>
        {!item.completed && <i class="fa-solid fa-check-to-slot iconBtn" onClick={(e) => onMark(item)}></i>}
      </div>
    </div>
  );
}

export default TodoItem;