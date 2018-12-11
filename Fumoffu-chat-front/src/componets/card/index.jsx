import React, { Component } from 'react';

import './card.scss';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <figure className="avatar avatar-lg" data-initial="YZ">
                        <i className="avatar-presence online"></i>
                    </figure>
                    <div className="card-user">
                        <div className="card-title"> { this.props.friend.title } </div>
                        <div className="card-subtitle">{ this.props.friend.subtitle }</div>
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