import React, { useContext } from 'react'
import { AppContext } from '../Context'
import UserCard from './UserCard';

const User = () => {

    const {users} = useContext(AppContext);
    


  return (
    <div className='user'>
        <h2>Available Users</h2>
        { users.map((user:any,index:number) => {
            return(
                <UserCard key={index} user ={user}/>
            )
        })}
    </div>
  )
}

export default User