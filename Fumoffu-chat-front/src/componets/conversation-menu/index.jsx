import React, { Component } from 'react';
    
import './conversation-menu.scss';
    
export default class ConversationMenu extends Component {
    constructor(props) {
        super(props);

        this.onKeyboardVoiceHandle = this.onKeyboardVoiceHandle.bind(this);
        this.onVideoCamHandle = this.onVideoCamHandle.bind(this);
        this.onMoreOptionsHandle = this.onMoreOptionsHandle.bind(this);
    }

    onKeyboardVoiceHandle() {
        this.props.keyboardVoiceHandle(this.props.friend);
    }

    onVideoCamHandle() {
        this.props.videoCamHandle(this.props.friend);
    }

    onMoreOptionsHandle() {
        this.props.moreOptionsHandle(this.props.friend);
    }

    render() {
        return (
            <section className="conversation-menu">
                <div className="user-indentifier">
                    <div className="title"> { this.props.friend.username } </div>
                    <div className="subtitle"> #active time </div>
                </div>
                <button onClick={this.onKeyboardVoiceHandle} className="btn btn-conversation-menu">
                    <i className="material-icons font-large"> keyboard_voice </i>
                </button>
                <button onClick={this.onVideoCamHandle} className="btn btn-conversation-menu">
                    <i className="material-icons font-large"> videocam </i>
                </button>
                <button onClick={this.onMoreOptionsHandle} className="btn btn-conversation-menu">
                    <i className="material-icons font-large"> more_vert </i>
                </button>
            </section>
        )
    }
}