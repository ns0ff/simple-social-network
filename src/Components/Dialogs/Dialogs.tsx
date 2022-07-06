import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsType = {
    dialogsData: Array<DialogItemType>
    messageData: Array<MessageType>
}

export const Dialogs = (props: DialogsType) => {

    const dialogsElements = props.dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
    const messageElements = props.messageData.map(el => <Message id={el.id} message={el.message} />)


    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>


    );
};