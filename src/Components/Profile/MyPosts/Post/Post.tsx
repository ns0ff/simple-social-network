import React from "react";
import style from './Post.module.css'

type PostType = {
    message: string,

}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={style.item}>
            <img src={'https://randomuser.me/api/portraits/men/60.jpg'} alt={'userPic'}/>
            {props.message}
            <div><span>like</span></div>
        </div>
    )
}
