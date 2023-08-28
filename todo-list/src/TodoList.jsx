import { TodoItem } from "./TodoItem";

// every function has ONE return
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        /* {}: JavaScript code; return an array */
        return (
          <TodoItem
            {...todo}
            //  id={todo.id}
            //  completed={todo.completed}
            //  title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
