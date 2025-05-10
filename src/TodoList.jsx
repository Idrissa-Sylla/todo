import { useState } from "react";
import delete_button from "./assets/delete.svg";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [today, setToday] = useState("");

  function handleDateChange(event) {
    setToday(event.target.value);
  }

  function handleTitleChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setTodoDescription(event.target.value);
  }

  function handleAddTodo() {
    const newTodo = {
      title: todoTitle,
      description: todoDescription,
      date: today,
      done: false,
    };
    setTodoList((prevValue) => [...prevValue, newTodo]);
    setToday("");
    setTodoTitle("");
    setTodoDescription("");
  }

  function handleRemoveTodo(index) {
    setTodoList(todoList.filter((_, i) => i !== index));
  }

  function handleCheckChange(index) {
    const updatedTodos = [...todoList];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodoList(updatedTodos);
  }

  return (
    <div className="container">
      <h1 className="heading">Home Page</h1>
      <h2 className="sub-heading">Today's Tasks</h2>

      <ul className="todo-list">
        {todoList.map((todoItem, index) => (
          <li key={index} className="todo-item-card">
            <div className={`todo-display ${todoItem.done ? "todo-done" : ""}`}>
              <div className="todo-display-left">
                <p className="todo-title">{todoItem.title}</p>
                <p className="todo-description">{todoItem.description}</p>
                <p className="todo-date">{todoItem.date}</p>
              </div>
              <span className="todo-actions">
                <input
                  type="checkbox"
                  checked={todoItem.done}
                  onChange={() => handleCheckChange(index)}
                />
                <button
                  className="btn"
                  onClick={() => {
                    handleRemoveTodo(index);
                  }}
                >
                  <img
                    src={delete_button}
                    alt="Delete button"
                    className="delete-image"
                  />
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter todo title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Enter todo description"
        value={todoDescription}
        onChange={handleDescriptionChange}
      />
      <input type="date" value={today} onChange={handleDateChange} />
      <button className="add-todo-button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoList;
