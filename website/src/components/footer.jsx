import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="foot-bar">
                <div className="container">
                    <p className="navbar-text pull-left">Written by <a href="mailto:cyficowley@gmail.com?Subject=Can%20I%20please%20hire%20you%20for%20lots%20of%20money">Cyrus Cowley</a></p>
                    <p className="navbar-text pull-right small-hidden">Last updated 5/13/18</p>
                </div>
            </div>
        )
    };
}