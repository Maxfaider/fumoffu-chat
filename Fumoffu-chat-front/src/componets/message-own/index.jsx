import React, { Component } from 'react';

import './message-own.scss';

export default class MessageOwn extends Component {
    constructor(props) {
        super(props);
    }

    renderDate() {
        if(this.props.date)
            return <div className="message-own-date">{ this.props.date }</div>
    }

    render() {
        return (
            <div className="message-own">
                <div className="text">
                    { this.props.text }
                </div>
                { this.renderDate() }
            </div>
        )
    }
}