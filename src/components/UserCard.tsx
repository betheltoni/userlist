import React, { useContext } from 'react'
import { AppContext } from '../Context';

const UserCard = (props:{user:{id:number,name:string,age:number,bio:string;}}) => {
    const {id,name,age,bio} = props.user;

  const {userEvent} = useContext(AppContext);
  const handleDelete = () => {
    userEvent("REMOVE_USER", {userId: id});
  }
    
  return (
    <div className='usercard'>
        <h3>{name}</h3>
        <h4>{age}</h4>
        <div>
            <small>{bio}</small>
        </div>
        <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}

export default UserCard