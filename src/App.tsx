import React, { useState } from 'react';
import './App.scss';
import AddUser from './components/AddUser';
import User from './components/User';
import { AppContext } from './Context';

function App() {
  const userList:any = [
    // {
    //   id: 1,
    //   name:"Bethel",
    //   age: 23,
    //   bio:"software engineering intern at iQubeLabs"
    // }
  ]

  const [users, setUsers] = useState(userList);

  const userEvent = (actionType:any, payload:any) => {
    switch(actionType){
      case "ADD_USER" :
        setUsers([...users, payload.newUser])
        return;
      case "REMOVE_USER" :
        setUsers(users.filter((user: { id: any; }) => user.id !== payload.userId))
        return;
      default:
        console.log("defualt");
        return;
    }
  }

  

  return (
    <div className="App">
      <AppContext.Provider value={{ users, userEvent }}>
        <AddUser/>
        <User/>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
