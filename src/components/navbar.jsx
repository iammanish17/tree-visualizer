import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand mb-0 h1"
                href="https://github.com/iammanish17/tree-visualizer">
            <img src="https://avatars3.githubusercontent.com/u/35730135"
                width="20" height="20" class="d-inline-block align-top">
            </img>
        ⠀Tree Visualizer by manish</a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#info">Help</a>
	        </li>
            </ul>
            </div>
            </nav>
        );
    }
}

export default Navbar;
