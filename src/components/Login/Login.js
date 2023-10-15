import React from 'react';
import './login.css'
import {NavLink, Route} from "react-router-dom";
import s from "../Navbar/Navbar.module.css";

const Login = (props) => {
    return (
        <div>
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
                    <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
                    <br/>
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                    </label>
                    <br/>
                    <br/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        <NavLink to={'/profile'} className = { navData => navData.isActive ? s.active : s.item }>Login</NavLink>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
