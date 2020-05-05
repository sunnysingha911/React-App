import React from 'react';
import './assets/css/login.css';
const Login = ()=>{
    return(
        <div className="login">
            <div className="login-form">
                <h2>Login</h2>
                <div className="form">
                    <form>
                        User Id
                        <input className="user-id" type="text" name="userId" placeholder="User ID"/>
                        Password
                        <input className="password" type="password" name="" placeholder="Password"/>
                        <p>Forgot password?</p>
                        <button className="login-btn">Login</button>
                        <button className="register-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;