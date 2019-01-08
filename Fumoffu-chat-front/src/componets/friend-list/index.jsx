import React, { Component } from 'react';

import Card from '../card'

import './friend-list.scss';

export default class FriendList extends Component {
    constructor(props) {
        super(props);

        this.onSelectFriendEventHandle = this.onSelectFriendEventHandle.bind(this);
    }

    onSelectFriendEventHandle(friend) {
        this.props.selectFriendEventHandle(friend);
    }

    render() {
        return (
            <section className="friends-list">
                { this.props.friends.map( (item) => {
                    if(item.id === this.props.friendSelect.id)
                        return <Card  key = {item.id} active={true} friend = {item} clickEventHandle = {this.onSelectFriendEventHandle} />
                    return <Card  key = {item.id} friend = {item} clickEventHandle = {this.onSelectFriendEventHandle} />  
                })}
            </section>
        )
    }
}