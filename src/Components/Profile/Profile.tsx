import React from 'react'
import styles from './Profile.module.css'
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    profilePage: MyPostsType
    addPost: (message: string) => void
}

export const Profile = (props: ProfileType) => {
    return <div className={styles.content}>
        <ProfileInfo/>
        <MyPosts postData={props.profilePage.postData} addPost={props.addPost}/>
    </div>
}