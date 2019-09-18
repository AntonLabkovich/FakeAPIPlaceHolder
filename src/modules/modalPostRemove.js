import React, {Component} from 'react';

export default class ModalRemove extends Component{
    constructor(props){
        super(props);
        this.state={

        };

    }

    render() {
        return (
            <div className={'modal'}>
                <p>Этот пост был удален</p>
                <p>НАВСЕГДА</p>
                <p><button onClick={()=>this.handleClick(this.props.params)}>OK</button></p>
            </div>
        )
    }

    handleClick(modalRemove){
        this.props.modalShow(modalRemove);
    }
}