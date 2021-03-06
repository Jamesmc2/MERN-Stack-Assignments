import React, {useState} from 'react';

const RegisterForm = props => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
            <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>   
                <input type="submit" />     
                <p>First Name: {formState.firstName}</p>
                <p>Last Name: {formState.lastName}</p>
                <p>Email: {formState.email}</p>
                <p>Password: {formState.password}</p>
            </form>
        </div>
    )
}

export default RegisterForm