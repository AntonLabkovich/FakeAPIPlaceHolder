import React,{Component, Fragment} from "react";
import { Link } from "react-router-dom";


export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        console.log()
        return (
            <ul>
                {this.props.menu.map((item,i)=>(
                    <li key={i}>
                        <Link to={`${item.url}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}
