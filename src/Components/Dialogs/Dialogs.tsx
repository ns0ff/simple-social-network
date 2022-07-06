import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Marius Hutchinson'},
        {id: 2, name: 'Jaimee Bryan'},
        {id: 3, name: 'Tess Coffey'},
        {id: 4, name: 'Myles Atherton'},
        {id: 5, name: 'Crystal Heaton'},
        {id: 6, name: 'Veer Cotton'},
    ]

    const messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Qui ad sequi tempore dolorem nihil. Vel aliquam exercitationem temporibus et incidunt.'},
        {id: 3, message: 'Voluptate itaque qui suscipit natus reiciendis deserunt. Est nulla accusantium autem.'},
        {id: 4, message: 'Sapiente saepe quos et labore. Pariatur sunt est sit quis. Et hic quidem ratione.'},
        {id: 5, message: 'Dolorem doloremque magni cum maiores vero facere ipsam. Quidem aut laudantium reiciendis praesentium.'},
        {id: 6, message: 'Praesentium aut autem saepe tempore molestiae. Ut sed non eum porro in voluptate assumenda. Sit est illo consequatur.'},
    ]

    const dialogsElements = dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
    const messageElements = messageData.map(el => <Message message={el.message} />)


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