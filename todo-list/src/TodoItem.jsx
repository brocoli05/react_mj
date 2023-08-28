export function TodoItem(completed, id, title, toggleTodo, deleteTodo) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        // calling the function after passing the value
        // {deleteTodo(todo.id)} : calling the function right away doesn't work properly
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
