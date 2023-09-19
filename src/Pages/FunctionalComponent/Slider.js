import React, { useState } from "react";

export default function Slider() {
  const [users, setusers] = useState([
    {
      id: 1,
      name: "Sujit",
      role: "fe",
    },
    {
      id: 2,
      name: "fahad",
      role: "game dev",
    },
    {
      id: 2,
      name: "rohit",
      role: "be",
    },
    {
      id: 1,
      name: "bharath",
      role: "db dev",
    },
    {
      id: 1,
      name: "rago",
      role: "fe",
    },
  ]);

  const [index, setindex] = useState(0);

  const handleadd = ()=>{

    if (index ==4){
        setindex(0)
    }else{
        setindex(index+1)

    }
  }


  const handleminus = ()=>{

    if (index == 0){
        setindex(4)
    }else{
        setindex(index-1)

    }
  }

  const handlesurprise =()=>{


    let random = Math.floor(Math.random() * 4);

    console.log(random);
    setindex(random)

  }

  return <div className="m-3">
    
    {users[index].name}
<br/>
    {users[index].role}

    <br></br>
    <button onClick={handleminus}>
        {"<"}
    </button>

    <button className="ms-4" onClick={handleadd}>
        {">"}
    </button>

<br/>

<button onClick={handlesurprise} className="mt-4 btn btn-primary ms-0">surprise me</button>
  
    </div>;
}
