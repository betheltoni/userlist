import React, { useContext, useState } from 'react'
import { AppContext } from '../Context';

const AddUser = () => {

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [bio,setBio] = useState('');

  const {userEvent} = useContext(AppContext);
  const handleAdd = () => {
    const user = {id:Math.random(), name , age, bio}
    userEvent("ADD_USER", {newUser:user});
    setName('');
    setAge('');
    setBio("")
  }

  return (
    <div className='adduser'>
        <h2>Add New User</h2>
        <form action="">
          <div className='form-control'>
            <input type="text" required placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div className='form-control'>
            <input type="number" required placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}} />
          </div>
          <div className='form-control'>
            <input type="text" required placeholder='Bio' value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
          </div>
        </form>
        <button onClick={handleAdd}>Add User</button>
    </div>
  )
}

export default AddUser