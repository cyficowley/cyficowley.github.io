import logo from './logo.svg';
import React from 'react';
import '../styles/header.css';

export default class Header extends React.Component{
    render() {
        return(
            <div className = "header">
                <div className="nav_bar go-UP">
                    <ul>
                        <li><img id="main-logo" rel="icon" src={logo} alt="logo"/></li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li id="collapsible"><a>&#9776;</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div id="mobile-menu" className="go-UP">
                    <ul style={{fontSize: "0"}}>
                        <li>
                            <a href="#home">Home</a>
                        </li><li>
                            <a href="#portfolio">Skills</a>
                        </li><li>
                            <a href="#about">About</a>
                        </li><li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}