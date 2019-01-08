import React, { Component } from 'react';

import MessageFriend from '../message-friend';
import MessageOwn from '../message-own';

import './conversation-messages.scss';

export default class ConversationMessages extends Component {
    constructor(props) {
        super(props);
    }

    buildMessageFriend(id, body) {
        return <MessageFriend 
            key={ id }
            text={ body } />
    }

    buildMessageFriendWithAvatar(id, body) {
        return <MessageFriend 
            key={ id }
            isProfile={ true }
            text={ body } 
            username={ this.props.friend.username } 
            profileUrl={ this.props.friend.profileUrl } />
    }

    buildMessageFriendWithDate(id, body, date) {
        return <MessageFriend 
            key={ id }
            text={ body } 
            date={ date } />
    }

    buildMessageFriendWithAvatarAndDate(id, body, date) {
        return <MessageFriend 
            key={ id }
            isProfile={ true }
            text={ body } 
            username={ this.props.friend.username } 
            profileUrl={ this.props.friend.profileUrl } 
            date={ date } />
    }

    buildMessageOwn(id, body) {
        return <MessageOwn 
            key={ id }
            text={ body }/> 
    }

    buildMessageOwnWithDate(id, body, date) {
        return <MessageOwn 
            key={ id }
            text={ body }  
            date={ date } />
    }

    render() {
        return (
            <section className="conversation-messages">
                { this.props.messages.map( (message, index, arrMessages) => {
                    if (message.owner === 'own') {
                        if(arrMessages[ index + 1] && arrMessages[ index + 1 ].owner === 'own') 
                            return this.buildMessageOwn(message.id, message.body);
                        else
                            return this.buildMessageOwnWithDate(message.id, message.body, message.date);
                    } else {
                        if(arrMessages[ index - 1] && arrMessages[ index - 1 ].owner === 'own') {
                            if(arrMessages[ index + 1] && arrMessages[ index + 1 ].owner === 'his') 
                                return this.buildMessageFriendWithAvatar(message.id, message.body);
                            else
                                return this.buildMessageFriendWithAvatarAndDate(message.id, message.body, message.date);
                        } else {
                            if(message.owner == 'his') {
                                if(arrMessages[ index + 1] && arrMessages[ index + 1 ].owner === 'his') 
                                    return this.buildMessageFriend(message.id, message.body);
                                else
                                    return this.buildMessageFriendWithDate(message.id, message.body, message.date);
                            }
                        }
                    }    
                })}
            </section>
        )
    }
}