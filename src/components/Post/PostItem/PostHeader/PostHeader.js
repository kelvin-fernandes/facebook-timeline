import React from 'react';

import './PostHeader.css'

function PostHeader({ avatar, user_name, date }) {
    return (
        <div className="post-header">
            <img className="avatar" src={avatar} />
            <div className="details">
                <span className="username">{user_name}</span><br />
                <span className="date">{date}</span>
            </div>
        </div>
    );
}

export default PostHeader;