import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom";

export default class HeaderTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>{this.props.lengthTodo}</p>
                <Link to='/dist/showAllTodo'> Все задачи </Link>
                <Link to='/dist/showTrueTodo'> Завершенные </Link>
                <Link to='/dist/showFalseTodo'> Не завершенные </Link>
            </div>
        )
    }
}