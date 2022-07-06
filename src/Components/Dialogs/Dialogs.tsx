import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem id={1} name={'Marius Hutchinson'} />
                <DialogItem id={2} name={'Jaimee Bryan'} />
                <DialogItem id={3} name={'Tess Coffey'} />
                <DialogItem id={4} name={'Myles Atherton'} />
                <DialogItem id={5} name={'Crystal Heaton'} />
                <DialogItem id={6} name={'Veer Cotton'} />
            </div>
            <div className={style.messages}>
                <Message message={'Hi'} />
                <Message message={'Qui ad sequi tempore dolorem nihil. Vel aliquam exercitationem temporibus et incidunt. Voluptate itaque qui suscipit natus reiciendis deserunt. Est nulla accusantium autem.'} />
                <Message message={'Sapiente saepe quos et labore. Pariatur sunt est sit quis. Et hic quidem ratione.'} />
            </div>
        </div>


    );
};