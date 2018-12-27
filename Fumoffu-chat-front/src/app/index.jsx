import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'

import Viewbuilder from '../views/viewbuilder';

import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
            <div className="chat">
                <div className="navbar"> 
                    <section className="user-status">
                        <figure className="avatar avatar-lg" data-initial="YZ">
                            <i className="avatar-presence online"></i>
                        </figure>
                    </section> 
                    <section className="menu">
                        <NavLink className="menu-item" exact to="/" activeClassName="select"> <i className="large material-icons"> home </i> </NavLink> 
                        <NavLink className="menu-item" to="/chat" activeClassName="select"> <i className="large material-icons"> chat </i> </NavLink>
                        <NavLink className="menu-item" to="/group" activeClassName="select"> <i className="large material-icons"> group </i> </NavLink> 
                        <NavLink className="menu-item" to="/settings" activeClassName="select"> <i className="large material-icons"> settings </i> </NavLink> 
                    </section> 
                    <section className="options">
                        <button className="options-item"> <i className="large material-icons"> exit_to_app </i> </button>
                    </section> 
                </div>
                <Switch>
                    <Route path="/" exact component={Viewbuilder.renderHomeZone} />
                    <Route path="/chat" component={Viewbuilder.renderChatZone} />
                    <Route path="/group" component={Viewbuilder.renderGroupsZone} />
                    <Route path="/settings" component={Viewbuilder.renderSettingsZone} />
                    <Route component={Viewbuilder.renderHomeZone}/>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}