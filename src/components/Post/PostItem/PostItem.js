import React from 'react';

import './PostItem.css';

import PostHeader from './PostHeader/PostHeader';
import PostComment from './PostComment/PostComment';

function PostItem({ avatar, user_name, date, content, comments }) {
    return (
        <div className="post-item">
            <PostHeader avatar={avatar} user_name={user_name} date={date} />
            <p className="content">{content}</p>
            <div className="divider" />
            <PostComment comments={comments} />
        </div>
    );
}

export default PostItem;