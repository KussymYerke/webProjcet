import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post id={p.id} key={p.id} message={p.message} likesCont={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>

        </div>
    );
};

export default MyPosts;
