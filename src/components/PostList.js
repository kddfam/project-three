import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions';
import Post from '../widgets/Post';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map(post => {
            return <Post title={post.title} body={post.body} key={post.id} userId={post.userId} />
        })
    }

    render() {
        return(
            <div>
                {this.renderPosts()}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostList)