// crud

import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function Todo() {
  const v = uuidv4();
  const [input, setinput] = useState();
  const [todolist, setTodolist] = useState([]);

  const datafetch = async () => {
    // let data = await fetch("http://localhost:3000/todoList");
    // let response = await data.json();
    // console.log(response);

    let response = await axios.get("http://localhost:3000/todoList");
    setTodolist(response.data);
  };

  useEffect(() => {
    datafetch();
  }, []);

  const handleaddchange = (e) => {
    setinput(e.target.value);
  };

  const handleadd = () => {
    axios.post("http://localhost:3000/todoList", { id: uuidv4(), task: input });

    datafetch();
    // setTodolist([...todolist, { id: uuidv4(), task: input }]);
    setinput("");
  };

  const handledelete = async (deleteid) => {

    await axios.delete(`http://localhost:3000/todoList/${deleteid}`)
    datafetch();

    // const filterdelete = todolist.filter((todo) => todo.id !== deleteid);
    // setTodolist(filterdelete);
  };

  const handleupdate =async (index) => {
    const update = prompt("update your todo", todolist[index].task);

    await axios.put(`http://localhost:3000/todoList/${todolist[index].id}`,{id:todolist[index].id,task:update})

    datafetch();

    // let cpoied = [...todolist];

    // cpoied[index].task = update;

    // setTodolist(cpoied);
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
