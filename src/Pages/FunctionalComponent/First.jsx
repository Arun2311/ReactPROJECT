

import React, { useState } from "react";
import Second from "./Second";

export default function First() {
  const [count, setcount] = useState(1);
  const [price, setprice] = useState(0);

  const handlechange = () => {
    console.log("ahiu");

    setcount(count + 1);

    let a = count * 150;

    setprice(a + 150);

    console.log(count, price, "-0-------");
  };

  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={handlechange}>Add</button>

      <Second price={price} name="jailer" />

      {/* <Second price={price} name="leo" /> */}
    </div>
  );
}
