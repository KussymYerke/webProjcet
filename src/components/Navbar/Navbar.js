import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendContainer from "./Friends/FriendContainer";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.nitem}>
                <img src={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} width={'48px'}/>
                <NavLink to={'/profile'} className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.nitem}>
                <img src="https://cdn-icons-png.flaticon.com/512/3279/3279264.png" width={'48px'}/>
                <NavLink to={'/dialogs'} className = { navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink>
            </div>
            <div className={s.nitem}>
                <img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" width={'48px'}/>
                <NavLink to={'/users'} className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>
            <div>
                <FriendContainer />
            </div>
        </nav>
    );
};

export default Navbar;
