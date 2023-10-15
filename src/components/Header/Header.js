import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <a className={s.link} href={'/login'}>VKbtu</a>
            </div>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? "you are logged in"
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
