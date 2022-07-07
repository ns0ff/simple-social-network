import React, {useRef} from 'react'
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

type PostsPropsType = {
    postData: Array<PostType>
    addPost: (message: string) => void
}

export const MyPosts = (props: PostsPropsType) => {

    const postsElements = props.postData.map(el => <Post id={el.id} message={el.message} likes={el.likes} />)

    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    let newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) props.addPost(text)
        if (newPostElement.current) newPostElement.current.value = ''
    }

    return (
        <div className={styles.postsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>)
}