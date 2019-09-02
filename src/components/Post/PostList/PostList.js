import React, { Component } from 'react';

import './PostList.css';
import PostItem from '../PostItem/PostItem';

class PostList extends Component {
    state = {
        posts: [
            {
                avatar: "https://scontent.fcgr1-1.fna.fbcdn.net/v/t1.0-9/10550991_314470088727516_4929609226420041241_n.jpg?_nc_cat=102&_nc_oc=AQkeoaDXnzdwiMVjbWfu4KGgzstCfB4_-95FqSf4GsFZbp9mJn1ue_MZb-3_WVtRCn8&_nc_ht=scontent.fcgr1-1.fna&oh=248e84dba570647de2a5b28554518d74&oe=5E03C653",
                user_name: "Xôvem Nerd",
                date: "01 Set 2019",
                content: "Alguém sabe como está o mercado de React em São Paulo?",
                comments: [
                    {
                        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
                        user_name: "",
                        content: ""
                    }
                ]
            },
            {
                avatar: "https://scontent.fcgr1-2.fna.fbcdn.net/v/t1.0-9/14355691_1050599745037704_3729842228200249449_n.jpg?_nc_cat=106&_nc_oc=AQkPEOLPg_dFItGkVSSehRgtwYKJ2KnWf4C0qp024oL4Rqhakkou1nwFcshXZnI1f1Q&_nc_ht=scontent.fcgr1-2.fna&oh=bf388966909b723d23743960238f026a&oe=5E01432F",
                user_name: "Ximira",
                date: "01 Set 2019",
                content: "Alguém sabe como está o mercado de React em São Paulo?",
                comments: [
                    {
                        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
                        user_name: "",
                        content: ""
                    }
                ]
            },
            {
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
                user_name: "Peixola",
                date: "01 Set 2019",
                content: "Alguém sabe como está o mercado de React em São Paulo?",
                comments: [
                    {
                        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
                        user_name: "",
                        content: ""
                    }
                ]
            },
            {
                avatar: "https://scontent.fcgr1-2.fna.fbcdn.net/v/t1.0-9/69126986_112063263486480_6682129442174664704_n.jpg?_nc_cat=105&_nc_oc=AQn_N9zplPZL6yw-aOiGOCzKjg4VY8QgGCn1m8hnRLkrNrX2FRBS-VDOS3SqdcznG9Y&_nc_ht=scontent.fcgr1-2.fna&oh=fca3f4e223ee9b613669aa340bb18676&oe=5DCEB9E7",
                user_name: "Azaghal",
                date: "01 Set 2019",
                content: "Alguém sabe como está o mercado de React em São Paulo?",
                comments: [
                    {
                        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
                        user_name: "",
                        content: ""
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div className="post-list">
                {this.state.posts.map(post => (
                    <PostItem key={post.user_name} {...post} />
                ))}
            </div>
        );
    }
}

export default PostList;