import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({ 
        email:"",
        password:"",
    })


    const loginChangeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }

    const login = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, {withCredentials:true} )
            .then(res=>{
                console.log("LOGGGIN IN RESPONSE", res)
                if(res.data.msg == "success!"){
                    navigate("/dashboard")
                }
            })
            .catch(err=>console.log(err))
    }


    return (
        <div className="container">
            <h2>Login below</h2>
        <form onSubmit= {login}>
            <div className="form-group">
                <label>Email</label>
                <input onChange = {loginChangeHandler} type="text" className="form-control" name= 'email' />
                {/* {errors.email? <p className="text-danger">{errors.email.message}</p>: ""} */}

            </div>
            <div className="form-group">
                <label>Password</label>
                <input onChange = {loginChangeHandler} type="password" className="form-control" name= 'password' />
                {/* {errors.password? <p className="text-danger">{errors.password.message}</p>: ""} */}

            </div>
            
            <input type="submit" value="Login" className= "btn btn-primary" />
        </form>
    </div>
    );
};


export default Login;