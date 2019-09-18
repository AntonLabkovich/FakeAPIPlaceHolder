import React, {Component, Fragment} from 'react';
import Navigation from './modulesNavigation/menu'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (

            <header>
                {
                    <Navigation menu={this.props.menu}/>
                }
            </header>

        )
    }
}