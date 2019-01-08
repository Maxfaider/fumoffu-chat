import React, { Component } from 'react';

export default class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    buildAvatar() {
        var nameShort = this.props.username
            .substr(0, 3)
            .toUpperCase();

        if (this.props.profileUrl)
            return (
                <figure className="avatar avatar-lg">
                    <img src={this.props.profileUrl} alt={nameShort}></img>
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

    render() {
        return this.buildAvatar();
    }
}