import React from 'react';

import ChatZone from './chat-zone';

export default {
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