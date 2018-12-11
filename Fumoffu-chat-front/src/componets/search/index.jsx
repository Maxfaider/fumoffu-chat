import React, { Component } from 'react';

import './search.scss';

export default class Search extends Component {
    render() {
        return (
            <section class="search">
                <input class="search-text" type="text" placeholder="Search" />
            </section>
        )
    }
}