import { useEffect, useState } from "react";
import "./App.scss";
import List from "./components/List";

function App() {
  const [nameState, setNameState] = useState({name: '', surname: '',}) 
  const handleChange = e => {
    const { name, surname, number, value } = e.target;
    setNameState(prevState => ({
        ...prevState,
        [name]: value,
        [surname]: value,
        [number]: value
    }));
};
  const data = [
    {
      id: 1,
      name: 'name1',
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
      name: `${nameState.name}`,
      surname: `${nameState.surname}`,
      number: `+38${nameState.number}`,
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
        <div className="inputs">
          <input type="text" value={nameState.name} onChange={handleChange} name='name' placeholder='Enter you name'/>
          <input type="text" value={nameState.surname} onChange={handleChange} name='surname' placeholder='Enter you surname'/>
          <p>(+38)</p>
          <input type="text" value={nameState.number} onChange={handleChange} name='number' placeholder='Enter you number'/>
        </div>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
