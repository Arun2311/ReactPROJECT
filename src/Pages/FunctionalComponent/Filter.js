import React, { useState } from "react";
import  "./Filter.css"

export default function Filter() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      name: "Sujit",
      Course: "Frontend",
    },

    {
      id: 2,
      name: "fahad",
      Course: "Frontend",
    },

    {
      id: 3,
      name: "bharath",
      Course: "fullstack",
    },

    {
      id: 4,
      name: "rohit",
      Course: "Frontend",
    },

    {
      id: 5,
      name: "ragothaman",
      Course: "fullstack",
    },

    {
      id: 6,
      name: "mahendran",
      Course: "backend",
    },

    {
      id: 7,
      name: "sai",
      Course: "backend",
    },

    {
      id: 8,
      name: "saran",
      Course: "databse",
    },

    {
      id: 10,
      name: "sanjay",
      Course: "databse",
    },
  ]);

  const[datarender,setdatarender] = useState(datas)

  const courses = datas.map((da)=>da.Course)

  const uniqcourse =[...new Set(courses)]


  const handletab = (coursename)=>{
    console.log("click",coursename);
    if(coursename==="All"){
        setdatarender(datas)
    }else{
        const fildata = datas.filter(data=>data.Course===coursename)
        setdatarender(fildata)
    }

   
  }
  
uniqcourse.unshift("All")
  console.log(uniqcourse,"l");

  return (
    <div>

        {uniqcourse.map((da,i)=>
        <span onClick={()=>handletab(da)} className="tab" key={i}>
            {da}

        </span>
        )}

<br></br>

<div className="spa">
      {datarender.map((da, i) => (
        <h1 key={i}>
          {da.name}-{da.Course}
        </h1>
      ))}
</div>

    </div>
  );
}
