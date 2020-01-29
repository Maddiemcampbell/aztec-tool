import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";

class Header extends Component {
    render() {
        return (
            <div className="list-style">
                <ul className="flex-row ul-header">
                    <Router>
                        <li className="li-header">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="li-header">
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className="li-header">
                            <Link to="/machines">
                                Machines
                            </Link>
                        </li>
                        <li className="li-header">
                            <Link to="/services">
                                Services
                            </Link>
                        </li>
                        <li className="li-header" to="/contact">
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                        <Route exact path="/about" component={About} />
                    </Router>
                </ul>
            </div>
        )
    }
}

export default Header;
