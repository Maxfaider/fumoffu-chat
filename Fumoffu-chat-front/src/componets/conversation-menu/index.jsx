import React, { Component } from 'react';
    
import './conversation-menu.scss';
    
export default class ConversationMenu extends Component {
    render() {
        return (
            <section className="conversation-menu">
                <div className="user-indentifier">
                    <div className="title"> Alan M.E </div>
                    <div className="subtitle"> last seen 2 hours ago </div>
                </div>
                <button className="btn btn-conversation-menu">
                    <i className="material-icons btn-gray font-large"> keyboard_voice </i>
                </button>
                <button className="btn btn-conversation-menu">
                    <i className="material-icons btn-gray font-large"> videocam </i>
                </button>
                <button className="btn btn-conversation-menu">
                    <i className="material-icons btn-gray font-large"> more_vert </i>
                </button>
            </section>
        )
    }
}