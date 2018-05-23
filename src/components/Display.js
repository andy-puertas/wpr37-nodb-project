import React, { Component } from 'react';
import Header from './Header'
import Sidenav from './Sidenav'

export default class Display extends Component {
    render() {
        return (
            <div>
                <Header title='Video Generator'/>
                <Sidenav />
            </div>
        )
    }
}