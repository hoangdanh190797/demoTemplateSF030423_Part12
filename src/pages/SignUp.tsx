import React from 'react'
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { postUserRegister  } from '../store/slice/usersSlice'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';


export default function SignUp() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isLogin, userAfterJSON, userOnl, error } = useAppSelector((state: any) => {
        return state.users;
    })


    const [_name, setName] = useState('')
    const [_email, setEmail] = useState('');
    const [_password, setPassword] = useState('');

    console.log(userOnl);
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const user: any = {
            'username': _name,
            'email': _email,
            'password': _password
        }
        localStorage.setItem("userNew", JSON.stringify(user));
        dispatch(postUserRegister(user));

        console.log(isLogin);
        console.log(user);
        console.log(JSON.parse(userAfterJSON));
    }
    console.log(isLogin);

    if (isLogin) {
        alert("Đăng ký thành công!");
        navigate('/');
        console.log(userOnl);
        console.log(error);
    }
    
    const handleName = (event: any) => {
        setName(event.target.value)
    }
    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value)
    }
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <a href=''>Have an account?</a>
                        </p>
                        {/* <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul> */}
                        <form onSubmit={handleSubmit}>
                            <fieldset className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={handleName}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleEmail}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handlePassword}
                                />
                            </fieldset>
                            <button type='submit' className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
