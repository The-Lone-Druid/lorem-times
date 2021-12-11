import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        let title = this.props.match.params.post_title;
        let id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
        this.setState({
            title: title
        })
    }

    render() {

        const post = this.state.post ? (
            <div className='post'>
                <h2 className="center">{this.state.post.title}</h2>
                <p>
                    {this.state.post.body}
                </p>
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

export default Post;