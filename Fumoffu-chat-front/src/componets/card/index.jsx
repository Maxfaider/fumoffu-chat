import React, { Component } from 'react';

import './card.scss';

class Card extends Component {
    constructor(props) {
        super(props);

        this.sendEventClick = this.sendEventClick.bind(this);
    }

    buildAvatar() {
        var nameShort = this.props.friend.username
            .substr(0, 3)
            .toUpperCase();

        if (this.props.friend.profileUrl)
            return (
                <figure className="avatar avatar-lg">
                    <img src={this.props.friend.profileUrl} alt={nameShort}></img>
                    <i className="avatar-presence online"></i>
                </figure>
            )
        else 
            return (
                <figure className="avatar avatar-lg" data-initial={nameShort}>
                    <i className="avatar-presence online"></i>
                </figure>
            )
    }

    sendEventClick() {
        this.props.clickEventHandle(this.props.friend);
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    { this.buildAvatar() }
                    <div onClick={ this.sendEventClick } className="card-user">
                        <div className="card-title"> { this.props.friend.username } </div>
                        <div className="card-subtitle">{ this.props.friend.nickname }</div>
                    </div> 
                    <div className="card-date">
                        { this.props.friend.date }
                    </div>
                </div>
                <div className="card-body">
                    { this.props.friend.lastMessage } 
                </div>
            </div>
        )
    }
}

export default Card;