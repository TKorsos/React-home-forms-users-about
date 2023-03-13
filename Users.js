import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Users = () => {

    const[users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users", {
        params: {
          id: [2, 4, 7]
        }
      })
        .then( res => {
          setUsers( res.data )
        })
    }, [] )
  
    return (
      <>
        <h1>Ez a Users oldal</h1>
        <div>
          {
            users.map( (user, index) => {
              return <React.Fragment key={index}>
                        <h2>{user.id}. {user.name}</h2>
                        <p>{user.email}</p>
                      </React.Fragment>
            })
          }
        </div>
      </>
    )
}

export default Users;