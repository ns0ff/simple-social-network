import React from 'react';
import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active }>
                    Marius Hutchinson
                </div>
                <div className={style.dialog}>
                    Jaimee Bryan
                </div>
                <div className={style.dialog}>
                    Tess Coffey
                </div>
                <div className={style.dialog}>
                    Myles Atherton
                </div>
                <div className={style.dialog}>
                    Crystal Heaton
                </div>
                <div className={style.dialog}>
                    Veer Cotton
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>Qui ad sequi tempore dolorem nihil. Vel aliquam exercitationem temporibus et incidunt. Voluptate itaque qui suscipit natus reiciendis deserunt. Est nulla accusantium autem.</div>
                <div className={style.message}>Sapiente saepe quos et labore. Pariatur sunt est sit quis. Et hic quidem ratione.</div>
            </div>
        </div>


    );
};