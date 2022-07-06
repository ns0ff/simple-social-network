import React from 'react'
import styles from './Profile.module.css'
import {MyPosts, PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    postData: Array<PostType>
}

export const Profile = (props: ProfileType) => {
    return <div className={styles.content}>
        <ProfileInfo/>
        <MyPosts postData={props.postData}/>
    </div>
}