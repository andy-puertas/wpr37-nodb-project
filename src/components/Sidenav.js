import React from 'react';

export default function Sidenav(props) {
    return (
        <div className='sidebar'>
            <h3 className="description" >Menu</h3>
                <a href="nav" className="button">Login</a>
                <a href="nav" className="button">Generate</a>
                <a href="nav" className="button">Make Your Own</a>
        </div>
    )
}