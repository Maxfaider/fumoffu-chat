import React, { Component } from 'react';
    
import './conversation-menu.scss';
    
export default class ConversationMenu extends Component {
    render() {
        return (
            <section class="conversation-menu">
                <div class="user-indentifier">
                    <div class="title"> Alan M.E </div>
                    <div class="subtitle"> last seen 2 hours ago </div>
                </div>
                <button class="btn btn-conversation-menu">
                    <i class="material-icons btn-gray font-large"> call </i>
                </button>
                <button class="btn btn-conversation-menu">
                    <i class="material-icons btn-gray font-large"> videocam </i>
                </button>
                <button class="btn btn-conversation-menu">
                    <i class="material-icons btn-gray font-large"> more_vert </i>
                </button>
            </section>
        )
    }
}