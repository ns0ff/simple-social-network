import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostType = {
    id: number
    message: string
    likes: number
}

export type MyPostsType = {
    postData: Array<PostType>
}

export const MyPosts = (props: MyPostsType) => {

    const postsElements = props.postData.map(el => <Post id={el.id} message={el.message} likes={el.likes} />)

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>)
}