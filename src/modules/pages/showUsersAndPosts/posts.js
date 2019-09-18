import React, {Component, Fragment} from 'react';

export default class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
        console.log(this.props)
        return (
            <div className={'postUser'}>
                {this.props.posts.length!=0? this.props.posts.map((item,i)=>(
                   <div key={i}>
                       <h3>{item.title}</h3>
                       <p>{item.body}</p>
                   </div>
                )):null}
            </div>
        )
    }
}