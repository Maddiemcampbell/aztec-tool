import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="list-style">
                <ul className="flex-row ul-header">
                    <li className="li-header" to="/">Home</li>
                    <li className="li-header">About</li>
                    <li className="li-header">Machines</li>
                    <li className="li-header">Services</li>
                    <li className="li-header">Contact</li>
                </ul>
            </div>
        )
    }
}

export default Header;