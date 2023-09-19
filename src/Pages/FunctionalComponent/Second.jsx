import React, { useEffect, useState } from "react";

import { AiOutlineMail, AiFillNotification } from "react-icons/ai";
import "./style.css";

const Second = (props) => {
  const [count,setcount]=useState(0)
  useEffect(() => {
    console.log("2");
  }, [count]);

  const handlechange=()=>{

    setcount(count + 1)

  }
  return (
    <React.Fragment>
      <h1>{props.name}</h1>

      <div>
        {count}
        <button onClick={handlechange}>Clickccc</button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsam
          mollitia natus fugit rem consectetur ex dolore velit necessitatibus
          harum cupiditate in quia repellat deserunt autem, distinctio facere!
          Deleniti, quas?
        </p>
        <p>Price: {props.price}</p>
      </div>


      
    </React.Fragment>
  );
};

export default Second;
