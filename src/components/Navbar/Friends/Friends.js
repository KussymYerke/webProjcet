import React from 'react';
import FriendInfo from "./FriendInfo/FriendInfo";
import s from './Friends.module.css'

const Friends = (props) => {


    let friendElements = props.navBarPage.friendData.map( f => <FriendInfo id={f.id} key={f.id} name={f.name} src={f.src} />)

    return (
        <div>
            <h1 className={s.friends__title}>Friends</h1>
            <div className={s.friends}>
                {friendElements}
            </div>
        </div>
    );
};



export default Friends;
