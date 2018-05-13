import logo from './logo.svg';
import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "opened": true }
        this.openMenu = () => {
            this.setState({ "opened": !this.state.opened })
        }

    }




    render() {
        return (
            <div className="header">
                <div className="nav-bar z-high">
                    <ul>
                        <li><img id="main-logo" rel="icon" src={logo} alt="logo" /></li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">My Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li id="collapsible" onClick={this.openMenu}><a>&#9776;</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div id="mobile-menu" className={this.state.opened ? "z_high" : "z_high opened"}>
                    <ul style={{ fontSize: "0" }}>
                        <li>
                            <a href="#home" onClick={this.openMenu}>Home</a>
                        </li><li>
                            <a href="#skills" onClick={this.openMenu}>My Skills</a>
                        </li><li>
                            <a href="#about" onClick={this.openMenu}>About</a>
                        </li><li>
                            <a href="#contact" onClick={this.openMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}