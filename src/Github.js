import { useState, useEffect } from "react";

function Github() {
  let [users, setUser] = useState("");

  useEffect(() => {
    findUser();
  }, []);

  const findUser = (e) => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.map((person, idx) => <li key={idx}>{person.login}</li>));
      });
  };

  return (
    <div>
      <h1>profile name:{users} </h1>
      <img src={users} style={{ maxHeight: "130px" }}></img>
    </div>
  );
}

export default Github;
