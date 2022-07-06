import React from 'react'
import styles from './Profile.module.css'
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    profilePage: MyPostsType
}

export const Profile = (props: ProfileType) => {
    return <div className={styles.content}>
        <ProfileInfo/>
        <MyPosts postData={props.profilePage.postData}/>
    </div>
}