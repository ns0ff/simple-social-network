import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postData = [
        {id: 1, message: 'hello world', likes: 15},
        {id: 2, message: 'Aliquid aliquam officia praesentium exercitationem omnis sapiente. A qui laudantium numquam quis doloremque. Voluptas non qui et.', likes: 5},
    ]

    const postsElements = postData.map(el => <Post id={el.id} message={el.message} likes={el.likes} />)

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