import React from "react";
import { useNavigate } from 'react-router-dom';

const Forms = (props) => {

    const handleChange = (e) => {
      props.setData( { ...props.data, [e.target.name]: e.target.value } );
    }
  
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch("http://localhost/react/my-first-app/src/feldolgozo.php", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify( props.data )
      });
  
      navigate(`formtarget`);
    }
  
    return (
      <>
        <h1>Ez a Forms oldal</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Név: </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          <br/><br/>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" onChange={handleChange}/>
          <br/><br/>
          <input type="submit" />
        </form>
      </>
    )
}

export default Forms;