import React, { Component } from 'react';

import Avatar from '../avatar';

import './message-friend.scss';

export default class MessageFriend extends Component {
    constructor(props) {
        super(props);
    }

    renderDate() {
        if(this.props.date)
            return <div className="message-friend-date">{ this.props.date }</div>
    }

    buildMessagewithAvatar() {
        console.log(this.props.username);
        return (
            <div className="message-friend">
                <Avatar username={ this.props.username } profileUrl={ this.props.profileUrl }/>
                <div className="text">
                    { this.props.text }
                </div>
            </div>
        )
    }

    buildMessage() {
        return (
            <div className="message-friend">
                <div className="text-only" date={ this.props.date }>
                    { this.props.text }
                </div>
            </div>
        )
    }
    
    render() {
        const isProfile = this.props.isProfile;
        return (
          <div>
            { isProfile ? this.buildMessagewithAvatar() : this.buildMessage() }
            { this.renderDate() }
          </div>
        );
    }    
}