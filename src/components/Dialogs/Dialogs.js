import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    let state= props.dialogsPage

    let dialogsElements = state.dialogsData.map( d => <DialogItem id={d.id} key={d.id} name={d.name} />)
    let messagesElements = state.messagesData.map( m => <Message id={m.id} key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth){
        return <Navigate to={'/login'} />
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.bodymes}>
                <textarea value={newMessageBody} placeholder={'Your message...'} onChange={ onNewMessageChange }></textarea>
                <button onClick={ onSendMessageClick }>Send!</button>
            </div>
        </div>

    );
};

export default Dialogs;






// let newMessageElement = React.createRef();
//
// let addMessage = () => {
//     let text = newMessageElement.current.value;
//     alert(text);
// }
