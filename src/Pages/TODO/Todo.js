// crud

import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const v = uuidv4();
  const [input, setinput] = useState();
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      task: "Wake up",
    },
    {
      id: 2,
      task: "brush",
    },
    {
      id: 3,
      task: "bath",
    },
    {
      id: 4,
      task: "eat",
    },
  ]);

  const handleaddchange = (e) => {
    setinput(e.target.value);
  };

  const handleadd = () => {
    setTodolist([...todolist, { id: uuidv4(), task: input }]);
    setinput("");
  };

  const handledelete = (deleteid) => {
    console.log(deleteid, "clivk");

    const filterdelete = todolist.filter((todo) => todo.id !== deleteid);
    setTodolist(filterdelete);
  };

  const handleupdate = (index) => {
    const update = prompt("update your todo", todolist[index].task);

    let cpoied = [...todolist];

    cpoied[index].task = update;

    setTodolist(cpoied);
  };
  return (
    <div>
      <h1>Todo Application</h1>
      <input
        placeholder="enter your todo"
        value={input}
        onChange={handleaddchange}
      />

      <button className="btn btn-success ms-4" onClick={handleadd}>
        Add button
      </button>

      {todolist.map((to, i) => (
        <div className="m-4" key={i}>
          <span>{to.task}</span>
          <button
            onClick={() => handledelete(to.id)}
            className="btn btn-danger"
          >
            Delete
          </button>

          <button
            className="btn btn-primary ms-3"
            onClick={() => handleupdate(i)}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}
