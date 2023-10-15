import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {


    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/80/80889.png" alt=""/>
            {props.message}
            <div>
                <span>like </span> {props.likesCont}
            </div>
        </div>
    );
};

export default Post;
