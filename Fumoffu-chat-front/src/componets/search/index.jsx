import React, { Component } from 'react';

import './search.scss';

export default class Search extends Component {
    render() {
        return (
            <section className="search">
                <input className="search-text" type="text" placeholder="Search" />
            </section>
        )
    }
}