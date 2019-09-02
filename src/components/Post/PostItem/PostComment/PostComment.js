import React from 'react';

import './PostComment.css'

function PostComment({ comments }) {
    return (
        <div className="post-comment">
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <img className="avatar" src={comment.avatar} />
                    <p>
                        <span>{comment.user_name}</span>
                        {comment.content}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default PostComment;