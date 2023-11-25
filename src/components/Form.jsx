import { useState } from "react";
import validation from "../utils/validation";

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(
            validation({
              ...userData,
              [event.target.name]: event.target.value
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData, setUserData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
            />
            <p style={{color:"#ff00a9"}}>{ errors.email ? errors.email : null }</p>

            <label htmlFor="password">Password</label>
            <input 
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
            <p style={{color:"#ff00a9"}}>{ errors.password ? errors.password : null }</p>

            <button 
                type="submit"
                disabled={ !userData.email || errors.email || errors.password }
            >Submit</button>
        </form>
    );
 }
 