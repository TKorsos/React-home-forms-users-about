import { Link } from 'react-router-dom';

const FormTarget = (props) => {
    return (
      <>
        <h1>Ez a FormTarget oldal</h1>
        <p><b>Név:</b> {props.data.name}</p>
        <p><b>Email-cím:</b> {props.data.email}</p>
        <Link to="http://localhost:3000/forms/" ><button>Vissza</button></Link>
      </>
    )
}

export default FormTarget;