import React, {Component, Fragment} from 'react';
import UserModal from '../user/userModal';

export default class ItemPost extends Component{
    constructor(props){
        super(props);
        this.state={
            user:[],
            oneUser:{},
            modalUser:false
        };
    }
    render() {
        return (
            <Fragment>
                <h3>{this.props.params.title}</h3>
                <button onClick={()=>this.handleClickRemove(this.props.params.id)}>Удалить</button>
                <button onClick={()=>this.showUser(this.props.params.userId)}>{this.state.modalUser?'Скрыть ':'Показать '}пользователя</button>
                {this.state.modalUser?<UserModal user={this.state.oneUser}/>:null}
                <p>{this.props.params.userId}</p>
                <p>{this.props.params.body}</p>
            </Fragment>
        )
    }

    handleClickRemove (id) {
        this.props.remove(id);
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


    showUser = (userId) =>{
        let user = this.state.user.find((item) => userId===item.id);
        this.setState({
            oneUser: Object.assign({},user),
            modalUser: !this.state.modalUser
        })
    }
}