import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="list-style">
                <ul className="flex-row ul-header">
                        <li className="li-header">
                            <NavLink exact to="/" activeClassName="selected">
                                Home
                            </NavLink>
                        </li>
                        <li className="li-header">
                            <NavLink exact to="/about" activeClassName="selected">
                                About
                            </NavLink>
                        </li>
                        <li className="li-header">
                            <NavLink exact to="/machines" activeClassName="selected">
                                Machines
                            </NavLink>
                        </li>
                        <li className="li-header">
                            <NavLink exact to="/services" activeClassName="selected">
                                Services
                            </NavLink>
                        </li>
                        <li className="li-header" to="/contact">
                            <NavLink exact to="/contact" activeClassName="selected">
                                Contact
                            </NavLink>
                        </li>
                </ul>
            </div>
        )
    }
}

export default Header;
