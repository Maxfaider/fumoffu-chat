import React from 'react';

import ChatZone from './chat-zone';

export default {
    renderView(name) {
        switch(name) {
            case 'HomeZone': return this.createHomeZone();
            case 'ChatZone': return this.createChatZone();
            case 'GroupsZone': return this.createGroupZone();
            case 'SettingsZone': return this.createSettingsZone();
        }
    },
    renderHomeZone() {
        return <div> Home </div>
    },
    renderChatZone() {
        return <ChatZone />
    },
    renderGroupsZone() {
        return <div> Groups </div>
    },
    renderSettingsZone() {
        return <div> Settings </div>
    },
    renderLogin() {
        return <div> Login </div>
    }
}