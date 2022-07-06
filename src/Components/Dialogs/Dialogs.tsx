import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

export type DialogsType = {
    dialogsData: Array<DialogItemType>
    messageData: Array<MessageType>
}

type DialogsPageType = {
    messagesPage: DialogsType
}

export const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.messagesPage.dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
    const messageElements = props.messagesPage.messageData.map(el => <Message id={el.id} message={el.message} />)


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