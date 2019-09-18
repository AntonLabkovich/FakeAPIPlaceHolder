import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import UserModal from '../../user/userModal';

export default class ShowAllTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const newArr = this.props.allTodo.filter((item)=>(!item.completed))
        console.log(newArr);
        return (
            <div>{
                newArr.map((item, i) => (
                        <div className={'todoItem'} key={i}>
                            {!item.completed ? <p className={"false"}>Выполняется</p> : null}
                            <div>
                                <span className={'number'}>{i+1}</span>
                                {item.title}
                                <span onMouseEnter={() => this.props.showInfoUser(item.userId)}
                                      onMouseLeave={this.props.noneInfoUser}><FontAwesomeIcon icon={faInfoCircle}/>
                                </span>
                            </div>
                            {/*{this.props.flag ? <UserModal user={this.props.oneUser}/> : null}*/}
                            {/*{!item.completed ? <button className={'aprove'}*/}
                            {/*                           onClick={() => this.props.aprove(item.id)}>Завершить</button> : null}*/}
                        </div>
                    )
                )

            }</div>
        )
    }
}