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
                {formState.firstName.length < 2 ? <p>First name must be 2 characters long!</p>:<p></p>}
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>     
                {formState.lastName.length < 2 ? <p>Last name must be 2 characters long!</p>:<p></p>}   
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>   
                {formState.email.length < 5 ? <p>Email must be 5 characters long.</p>:<p></p>}     
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>     
                {formState.password.length < 8 ? <p>Password must be 8 characters long.</p>:<p></p>}
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>   
                {formState.password !== formState.confirmPassword ? <p>Passwords must match!.</p>:<p></p>}
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