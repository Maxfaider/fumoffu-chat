import React, { Component } from 'react';

import Card from '../card'

import './friend-list.scss';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: "asfrt345",
                    profileUrl: "",
                    title: "Alan M.E",
                    subtitle: "Maxfaider",
                    date: "5min ago",
                    lastMessage: "Pellentesque dictum suscipit congue."
                },
                {
                    id: "asft213",
                    profileUrl: "",
                    title: "James Gordon",
                    subtitle: "Dectective",
                    date: "2h ago",
                    lastMessage: "Pellentesque dictum suscipit congue."
                }
            ]
        }
    }

    render() {
        return (
            <section className="friends-list">
                { this.state.cards.map( (item) => {
                    return (
                        <Card  key = {item.id}  friend = {item} />
                    )     
                })}
            </section>
        )
    }
}