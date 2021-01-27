import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/actions';
import '../css/post.css';

class Post extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        
        const { user } = this.props;

        if(!user) {
            return null;
        }
        else {
            const title = this.props.title;
            const body = this.props.body;
            return(
                <div className="post">
                    <h1>{title}</h1>
                    <h3>{body}</h3>
                    <h6>{user.name}</h6>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.user.find(user => user.id === ownProps.userId) };
}

export default connect(mapStateToProps, { fetchUser })(Post);