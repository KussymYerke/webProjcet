import React from 'react';
import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <img className={s.ava} src={'https://www.w3schools.com/w3images/avatar2.png'} />
            {props.message}
        </div>
    );
};

export default Message;
