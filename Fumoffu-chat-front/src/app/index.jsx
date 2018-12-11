import React, { Component } from 'react';

import Viewbuilder from '../views/viewbuilder';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <div className="chat">
                <div className="navbar"> 
                    <section className="user-status">
                        <figure className="avatar avatar-lg" data-initial="YZ">
                            <i className="avatar-presence online"></i>
                        </figure>
                    </section> 
                    <section className="menu">
                        <div className="menu-item"> <i className="large material-icons"> home </i> </div>
                        <div className="menu-item select"> <i className="large material-icons"> chat </i> </div>
                        <div className="menu-item"> <i className="large material-icons"> group </i> </div>
                        <div className="menu-item"> <i className="large material-icons"> settings </i> </div>
                    </section> 
                    <section className="options">
                        <div className="options-item"> <i className="large material-icons"> exit_to_app </i> </div>
                    </section> 
                </div>
                { Viewbuilder.createChatZone() }
            </div>
        )
    }

}