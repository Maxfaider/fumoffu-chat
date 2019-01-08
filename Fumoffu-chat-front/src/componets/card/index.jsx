import React, { Component } from 'react';

import Avatar from '../avatar';

import './card.scss';

class Card extends Component {
    constructor(props) {
        super(props);

        this.sendEventClick = this.sendEventClick.bind(this);
    }

    sendEventClick() {
        this.props.clickEventHandle(this.props.friend);
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <Avatar username={ this.props.friend.username } profileUrl={ this.props.friend.profileUrl } />
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