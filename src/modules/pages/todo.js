import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import HeaderTodo from "./moduleTodo/headerTodo";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UserModal from "../user/userModal";
import ShowAllTodo from "./moduleTodo/showAllTodo";
import ShowFalseTodo from "./moduleTodo/showFalseTodo";
import ShowTrueTodo from "./moduleTodo/showTrueTodo";


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todosCopy: [],
            flag: false,
            oneUser: {}
        };
    }

    render() {
        const allTodo = [].concat(this.state.todosCopy);
        const aprove = this.aprove;
        const showInfoUser = this.showInsfoUser;
        const noneInfoUser = this.noneInfoUser;
        const flag = this.state.flag;
        const oneUser = this.state.oneUser;
        return (
            <div className={'todo'}>


                <BrowserRouter>
                    <HeaderTodo lengthTodo={this.state.todosCopy.length}/>
                    <Switch>
                       <Route exact path="/dist/showAllTodo" render={() => <ShowAllTodo allTodo={allTodo}
                            aprove={aprove}
                            showInfoUser={showInfoUser}
                            noneInfoUser={noneInfoUser}
                            oneUser={oneUser}
                            flag={flag}/>}/>

                            <Route exact path="/dist/showTrueTodo" render={() => <ShowTrueTodo allTodo={allTodo}
                                                                                               aprove={aprove}
                                                                                               showInfoUser={showInfoUser}
                                                                                               noneInfoUser={noneInfoUser}
                                                                                         oneUser={oneUser}
                                                                                         flag={flag}/>}/>

                        <Route exact path="/dist/showFalseTodo" render={() => <ShowFalseTodo allTodo={allTodo}
                                                                                         aprove={aprove}
                                                                                         showInfoUser={showInfoUser}
                                                                                         noneInfoUser={noneInfoUser}
                                                                                         oneUser={oneUser}
                                                                                         flag={flag}/>}/>
                    </Switch>
                </BrowserRouter>
                {/*<button className={'neutral'} onClick={()=> this.setState({switch:1})}>Все</button>*/}
                {/*<button className={'true'} onClick={()=> this.setState({switch:2})}>Завершенные</button>*/}
                {/*<button className={'false'} onClick={()=> this.setState({switch:3})}>В действии</button>*/}


                {/*{this.state.todosCopy.map((item, i) => (*/}

                {/*        <div key={i}>*/}
                {/*            {item.completed ? <p className={"true"}>Выполнено</p> :*/}
                {/*                <p className={"false"}>Выполняется</p>}*/}
                {/*            <div>*/}
                {/*                <span className={'number'}>{item.id}</span>*/}
                {/*                {item.title}*/}
                {/*                <span onMouseEnter={() => this.showInfoUser(item.userId)}*/}
                {/*                      onMouseLeave={this.noneInfoUser}><FontAwesomeIcon icon={faInfoCircle}/>*/}
                {/*        </span>*/}
                {/*            </div>*/}
                {/*            /!*{this.state.flag ? <UserModal user={this.state.oneUser}/> : null}*!/*/}
                {/*            {!item.completed ? <button className={'aprove'}*/}
                {/*                                       onClick={() => this.aprove(item.id)}>Завершить</button> : null}*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*)*/}
                {/*}*/}
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((items) => {
                this.setState({
                    todos: [...items],
                    todosCopy: [...items]
                })
            })
    }

    aprove = (id) => {
        const newTodos = this.state.todosCopy.map((item) => {
            item.id === id ? item.completed = true : null;
            return item
        });
        this.setState({
            todosCopy: [...newTodos]
        })
    };

    showInfoUser = (id) => {
        console.log(id);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((item) => {
                this.setState({
                    oneUser: item,
                    flag: true
                })
            })
    };

    noneInfoUser = () => {
        this.setState({
            flag: false
        })
    };

    // allTodos = () =>{
    //     return [].concat(this.state.todosCopy);
    // };
    //
    // trueTodos = () =>{
    //     return this.state.todosCopy.filter((item)=>(
    //         item.completed
    //     ));
    // };
    //
    //
    // falseTodos=()=>{
    //     return this.state.todosCopy.filter((item)=>(
    //         !item.completed
    //     ));
    // }
}


// this.state.todosCopy.map((item,i)=>(
//     <div key={i}>
//         <Route exact path="/dist/showAllTodo" component={() => <ShowAllTodo allTodo={item}/>}/>
//     </div>
// )) в main без роутеринга работатет