import React, { useContext, useState } from 'react'
import { AppContext } from '../Context';

const AddUser = () => {

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [bio,setBio] = useState('');

  const {userEvent} = useContext(AppContext);
  const handleAdd = (e:any) => {
    e.preventDefault();
    // if(name==='' || age===''||bio===''){
    //   alert("All fields are mandatory");
    // }
    const user = {id:Math.random(), name , age, bio}
    userEvent("ADD_USER", {newUser:user});
    setName('');
    setAge('');
    setBio('');
  }

  return (
    <div className='adduser' onSubmit={handleAdd}>
        <h2>Add New User</h2>
        <form action="">
          <div className='form-control'>
            <input type="text"   placeholder='Name' required value={name} onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div className='form-control'>
            <input type="number" required placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}} />
          </div>
          <div className='form-control'>
            <input type="text" required placeholder='Bio' value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
          </div>
          {/* <input type="submit" onClick={handleAdd} /> */}
          <button  type="submit">Add User</button>
        </form>
        
    </div>
  )
}

export default AddUser