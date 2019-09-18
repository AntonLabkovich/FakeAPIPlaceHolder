import React, {Component, Fragment} from 'react';

export default class Users extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {

        return (
            <ul className={'users'}>
                {
                    this.props.user.map((item,i)=>(
                        <li key={i} onClick={()=>this.props.showPostUserFunction(item.id)}>{item.name}</li>
                    ))
                }
            </ul>
        )
    }
}