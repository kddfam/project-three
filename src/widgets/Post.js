import React, { Component } from 'react';
import '../css/post.css';

export default class Post extends Component {
    render() {
        const title = this.props.title;
        const body = this.props.body;
        return(
            <div className="post">
                <h1>{title}</h1>
                <h3>{body}</h3>
            </div>
        );
    }
}