import React, {Component, Fragment} from 'react';
import Users from './showUsersAndPosts/users';
import Posts from './showUsersAndPosts/posts';

export default class UsersAndPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            posts: []
        };
    }

    render() {
        return (
            <div className={'usersAndPosts'}>
                {
                    this.state.user.length!==0 ? <Users user={this.state.user} showPostUserFunction={this.showPostUser}/> : null
                }

                {
                    this.state.user.posts!==0 ? <Posts posts={this.state.posts}/> : null
                }

            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((items) => {
                this.setState({
                    user: [...items]
                })
            })
    }

    showPostUser = (id) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res)=>res.json())
            .then ((items)=>{
                this.setState({
                    posts:[...items]
                })
        })
    }
}