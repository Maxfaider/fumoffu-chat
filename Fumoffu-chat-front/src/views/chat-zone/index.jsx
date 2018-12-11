import React, { Component } from 'react';

import Search from '../../componets/search';
import ConversationMenu from '../../componets/conversation-menu';

import './chat-zone.scss';

export default class ChatZone extends Component {
    render() {
        return (
            <section class="chat-zone">
                <section class="friends-zone"> 
                    <Search />
                </section>
                <section class="conversation-zone"> 
                    <ConversationMenu />
                </section>
            </section>
        )
    }
}