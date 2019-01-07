import React, { Component } from 'react';

import './search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.onFilterFriendHandle = this.onFilterFriendHandle.bind(this);
    }

    onFilterFriendHandle(evt) {
        this.props.filterFriendHandle(evt.target.value);
    }

    render() {
        return (
            <section className="search">
                <input onChange={this.onFilterFriendHandle} className="search-text" type="text" placeholder="Search" />
            </section>
        )
    }
}