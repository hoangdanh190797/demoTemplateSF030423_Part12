import React from 'react'
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { postUserLogin, getUserLogin } from '../store/slice/usersSlice'
import Alert from '@mui/material/Alert';
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";



export default function SignIn() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isLogin, userAfterJSON, userOnl, error, user } = useAppSelector((state: any) => {
        return state.users;
    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    if (isLogin) {
        alert("Đăng nhập thành công!");
        navigate('/');
        // console.log(currentUser);
        console.log(error);
        console.log(user);
    }

    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value)
    }

    console.log(userOnl);
    const handleSubmit = (event: any) => {
        event.preventDefault();



        // localStorage.setItem("user", JSON.stringify(user));


        dispatch(postUserLogin({user:{email, password}}));

        console.log(isLogin);
        console.log(user);
        // console.log(JSON.parse(userAfterJSON));
        console.log(userOnl);
    }
    console.log(isLogin);
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <Link to={'/signup'}>
                                <a href=''>Have an account?</a>
                            </Link>
                        </p>
                        {/* <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul> */}
                        <form onSubmit={handleSubmit}>
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
                            <button type='submit' className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
