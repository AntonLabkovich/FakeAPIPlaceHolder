import React, {Component, Fragment} from 'react';

export default class UserModal extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    render() {
        console.log(this.props.user.name);
        return (
            <div>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.address.city}</p>
                <p>{this.props.user.address.street}</p>
                <p>{this.props.user.address.suite}</p>
            </div>
        )
    }

}