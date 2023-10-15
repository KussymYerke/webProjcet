import React from 'react';
import s from './FriendInfo.module.css'

const FriendInfo = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.friend__img} src={props.src} alt=""/>
            <h1 className={s.friend__name}>{props.name}</h1>
        </div>
    );
};

export default FriendInfo;
