import React from 'react';
import '../styles/home.css';

export default class Header extends React.Component {

    render(){
        return (
        <section id="home">
            <div class="container">
                <div class="face-container col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1" id="face-container">
                </div>
                <div class="col-xs-12 z-high">
                    <h1>Cyrus Cowley</h1>
                    <h2>UCSD 2021</h2>
                </div>
                <div class="col-xs-12" id="stick-to-bottom">
                    &nbsp;
                </div>
            </div>
        </section>
        )
    }


}