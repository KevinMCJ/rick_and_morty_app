import { useState } from "react";
import validation from "./validate";

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({
        email:"",
        password:"",
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({
            ...userData,
            [property]: value
        })

        setErrors(validation({
            ...userData,
            [property]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                  type="text" 
                  name="email" 
                  value={userData.email}
                  onChange={handleChange}
                />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                  type="text" 
                  name="password" 
                  value={userData.password}
                  onChange={handleChange}
                />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;