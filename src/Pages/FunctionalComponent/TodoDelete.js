import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

export default function TodoDelete() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const todo = await fetch("https://jsonplaceholder.typicode.com/todos");

    const response = await todo.json();

    settodos(response.slice(0, 10));
  };

  const handledelete = (id) => {
    console.log(id, "map");

    let deletelist = todos.filter(
      (t, i) => (console.log(t.id, "filter"), t.id !== id)
    );

    settodos(deletelist);
  };

  return (
    <div>
      {todos.map((to, i) => (
        <div key={i}>
          <span>{to.id}</span>:<span>{to.title}</span>
          <button
            onClick={() => handledelete(to.id)}
            className=" m-4 btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
