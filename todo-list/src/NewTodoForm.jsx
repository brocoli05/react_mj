import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    // prevent page from refreshing
    e.preventDefault();

    if (newItem === "") return;
    onSubmit(newItem);
    // 1st: new array
    //  setTodos((currentTodos) => {
    //    return [
    //      ...currentTodos,
    //      {
    //        id: crypto.randomUUID().toString(),
    //        title: newItem,
    //        completed: false,
    //      },
    //    ];
    //  });

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
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
    </form>
  );
}
