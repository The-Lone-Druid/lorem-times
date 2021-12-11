import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }

    render() {

        console.log(this.props);

        const post = this.props.post ? (
            <div className='post'>
                <h2 className="center">{this.props.post.title}</h2>
                <p>
                    {this.props.post.body}
                </p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className='center'>
                <p>Loading post...</p>
            </div>
        );

        return (
            <div className="container">
                <h4>
                    {post}
                </h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.post_title;
    
    return {
        post: state.posts.find(post => post.title === title)
    }
}

const mapDispatchToProps = (dispatch) =>  {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);