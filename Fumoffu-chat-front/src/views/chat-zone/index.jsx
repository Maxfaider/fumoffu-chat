import React, { Component } from 'react';

import Search from '../../componets/search';
import ConversationMenu from '../../componets/conversation-menu';
import FriendList from '../../componets/friend-list';
import ConversationMessages from '../../componets/conversation-messages';

import './chat-zone.scss';

// View Higher level
/* Feactures:
    - Add Friend
    - Select Friend
    - Send Message
    - Recivicer Message
    - Other: Call, VideoCam, Block, Delete Messages, show Profile Friend
*/
export default class ChatZone extends Component {
    render() {
        return (
            <section className="chat-zone">
                <section className="friends-zone"> 
                    <Search />
                    <FriendList />
                    <section className="add-friends">
                        <button className="btn-round-add"><i className="material-icons"> add </i></button>
                    </section>
                </section>
                <section className="conversation-zone"> 
                    <ConversationMenu />
                    <ConversationMessages />
                    <section className="conversation-sender-zone">
                        <button className="btn-attachment"><i className="material-icons"> attachment </i></button>
                        <input className="text-sender" type="text" placeholder="Type your message here" />
                        <button className="btn-send"><i className="material-icons"> send </i></button>
                    </section>
                </section>
            </section>
        )
    }
}