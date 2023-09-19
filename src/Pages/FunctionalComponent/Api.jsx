import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Api() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((vale) => {
        return vale.json();
        // console.log(vale);
      })
      .then((res) => {
        setresponse(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {console.log(response, "ki")}
      {response.map((user, i) => (
        <div key={i}>
          <h1> Nameuhuhuuhuh : {user.name}</h1>
          <h2>Email : {user.email}</h2>

          <p>
            Area : {user.address.city}-{user.address.zipcode}
          </p>
        </div>
      ))}
    </div>
  );
}
