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
    constructor(props) {
        super(props);
        this.state = {
            friendCurrent: {
                id: "asfrt345",
                profileUrl: "https://avatars3.githubusercontent.com/u/7024527?s=400&v=4",
                username: "Alan M.E",
                nickname: "Maxfaider",
                date: "5min ago",
                lastMessage: "Pellentesque dictum suscipit congue."
            },
            friends: [
                {
                    id: "asfrt345",
                    profileUrl: "https://avatars3.githubusercontent.com/u/7024527?s=400&v=4",
                    username: "Alan M.E",
                    nickname: "Maxfaider",
                    date: "5min ago",
                    lastMessage: "Pellentesque dictum suscipit congue."
                },
                {
                    id: "asft213",
                    profileUrl: "",
                    username: "James Gordon",
                    nickname: "Dectective",
                    date: "2h ago",
                    lastMessage: "Pellentesque dictum suscipit congue."
                }
            ]
        }

        this.onSelectFriend = this.onSelectFriend.bind(this);
        this.onSendVoiceMessage = this.onSendVoiceMessage.bind(this);
        this.onVideoCall = this.onVideoCall.bind(this);
        this.onMoreOptions = this.onMoreOptions.bind(this);
        this.onAddFriend = this.onAddFriend.bind(this);
        this.onAttachmentFile = this.onAttachmentFile.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        this.onChangeTxtMessage = this.onChangeTxtMessage.bind(this);
        this.onFilterFriend = this.onFilterFriend.bind(this);
    }

    onSelectFriend(friendCurrent) {
        this.setState( {friendCurrent: friendCurrent} );
    }

    onSendVoiceMessage(friend) {

    }

    onVideoCall(friend) {

    }

    onMoreOptions(friend) {

    }

    onAddFriend(evt) {
        //this.setState( {friends: this.state.friends.concat([friendCurrent])} );
    }

    onAttachmentFile(evt) {

    }

    onSendMessage(evt) {

    }

    onChangeTxtMessage(evt) {

    }

    onFilterFriend(messageCurrent) {
        
    }

    render() {
        return (
            <section className="chat-zone">
                <section className="friends-zone"> 
                    <Search filterFriendHandle={this.onFilterFriend}/>
                    <FriendList friends={this.state.friends} selectFriendEventHandle={this.onSelectFriend}/>
                    <section className="add-friends">
                        <button onClick={this.onAddFriend} className="btn-round-add"><i className="material-icons"> add </i></button>
                    </section>
                </section>
                <section className="conversation-zone"> 
                    <ConversationMenu friend={this.state.friendCurrent} 
                        keyboardVoiceHandle={this.onSendVoiceMessage}
                        videoCamHandle={this.onVideoCall} 
                        moreOptionsHandle={this.onMoreOptions} />
                    <ConversationMessages />
                    <form className="conversation-sender-zone" onSubmit={this.onSendMessage}>
                        <button onClick={this.onAttachmentFile} className="btn-attachment"><i className="material-icons"> attachment </i></button>
                        <input onChange={this.onChangeTxtMessage} className="text-sender" type="text" name="txtMessage" placeholder="Type your message here" />
                        <button type="submit" className="btn-send"><i className="material-icons"> send </i></button>
                    </form>
                </section>
            </section>
        )
    }
}