import { useState, useEffect } from "react";
import "./index";

function App() {
  let [maleUser, setmaleUser] = useState("");
  let [femaleUser, setfemaleUser] = useState("");
  let [user, setUser] = useState("");
  useEffect(() => {
    fetchMaleUser();
  }, []);

  const fetchUser = (gender) => {
    fetch(`https://fakeface.rest/face/json?gender=${gender}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.image_url);
      });
  };

  const getuser = (e) => {
    let gender = e.target.innerHTML;
    fetchUser(gender);
  };

  const fetchMaleUser = (e) => {
    fetch("https://fakeface.rest/face/json?gender=male")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmaleUser(data.image_url);
      });
  };

  const fetchFemaleUser = (e) => {
    fetch("https://fakeface.rest/face/json?gender=female")
      .then((res) => res.json())
      .then((data) => {
        setfemaleUser(data.image_url);
      });
  };

  return (
    <div className="button">
      <img src={user} style={{ maxHeight: "250px" }}></img>
      <button onClick={getuser}>male</button>
      <button onClick={getuser}>female</button>
    </div>
  );
}

export default App;
