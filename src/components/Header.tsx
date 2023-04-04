import React from 'react'
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";


export default function Header() {

    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to={`/`}>
                        <a className="navbar-brand">conduit</a>
                    </Link>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            {/* Add "active" class when you're on that page" */}
                            <a className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"> <i className="ion-compose" />&nbsp;New Article </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"> <i className="ion-gear-a" />&nbsp;Settings </a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/signin'}>
                                Sign in
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/signup'}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
