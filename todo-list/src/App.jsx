import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  // 2nd: update my variable(function)
  // const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // useEffect: a hook; CANNOT call it inside loops or conditions; put it at the top of the file
  // 1st: run this function; store the data in local storage
  // 2nd: update my variable(function)
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  // function handleSubmit(e) {
  //   // prevent page from refreshing
  //   e.preventDefault();

  //   // 1st: new array
  //   setTodos((currentTodos) => {
  //     return [
  //       ...todos,
  //       {
  //         id: crypto.randomUUID().toString(),
  //         title: newItem,
  //         completed: false,
  //       },
  //     ];
  //   });

  //   setNewItem("");
  // }

  //console.log(todos);

  // change the completed state of a todo (checkbox)
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    // can return ONLY ONE element
    <>
      <NewTodoForm onSubmit={addTodo} />
      {/* <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            // change the value of the input whenever the user types it
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form> */}
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      {/* <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          // {}: JavaScript code; return an array
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                // calling the function after passing the value
                // {deleteTodo(todo.id)} : calling the function right away doesn't work properly
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}
