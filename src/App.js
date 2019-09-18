import React, {Component, Fragment} from 'react';
import Header from './modules/header';
import Footer from './modules/footer';
import Main from './modules/main';
import menu from './data/menu';
import Todo from "./modules/pages/todo";
import UsersAndPosts from "./modules/pages/usersAndPosts";
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div className={'container'}>
                        <Header menu={menu}/>
                    </div>
                    <div className={'container'}>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/dist/" component={Main} />
                            <Route exact path="/dist/usersAndPosts" component={UsersAndPosts} />
                            <Route exact path="/dist/todo" component={Todo} />
                        </Switch>
                    </div>
                    <div className={'container'}>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Fragment>
        )
    }
}
