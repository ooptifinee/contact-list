import { useEffect, useState } from "react";
import "./App.scss";
import List from "./components/List";

function App() {
  const data = [
    {
      id: 1,
      name: "name1",
      surname: "surname1",
      number: "+380",
    },
    {
      id: 2,
      name: "name2",
      surname: "surname2",
      number: "+380",
    },
  ];
  const [usersCount, setUsersCount] = useState(data);
  const addUser = () => {
    const newData = {
      id: Math.random(),
      name: "",
      surname: "",
      number: "",
    };
    setUsersCount([...usersCount, newData]);
  };

  const result = usersCount.map((obj) => {
    return (
      <p key={obj.id}>
        <List name={obj.name} surname={obj.surname} number={obj.number} />
      </p>
    );
  });

  console.log(usersCount);
  return (
    <div className="app">
      <div className="wrapper">
        <h1>Contact list</h1>
        <button onClick={() => addUser()}>Create</button> <br />
        <div>

        </div>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
