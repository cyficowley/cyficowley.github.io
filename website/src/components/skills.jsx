import React from 'react';
import RainbowButton from './rainbowButton.jsx'

export default class Skills extends React.Component {

    render() {
        return (
            <section id="skills">
                <div className="container">
                    <div className="col-xs-12" id="stick-to-top">&nbsp;</div>
                    <div className="col-md-8 col-md-offset-2 col-xs-12 centered">
                        <h2>My Work Experience</h2>
                        <hr />
                        <div id="Malwarebytes" className="exprience-section">
                            <img src="/images/Malwarebytes.png" />
                            <p className="labeler">Intern in quality assurance over the summer of 2017</p>
                            <ul>
                                <li>Worked in testing internal sales systems using salesforce for 2 months</li>
                                <li>Was the sole QA person for the <a target="_blank" href="https://www.malwarebytes.com">Malwarebytes website</a> for 2 months
                                    <ul>
                                        <li>I tested and validated every change to the website (which gets around 10 million visits every
                                            month)</li>
                                        <li>By the end of my internship I was developing new features and pushing out bug fixes to the site</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div id="seds" className="exprience-section">
                            <img src="/images/seds.png" />
                            <p className="labeler">Software Engineer at UCSD SEDS</p>
                            <ul>
                                <li>I am part of the 30 person student team designing and constructing a NASA sponsored, 3000 lbs thrust-capable $300k rocket engine test trailer</li>
                                <li>I am the principal software engineer for extraction, real time visualization and post analysis of data from the test stand</li>
                                <li>The main tools I used were React, WebSockets, Node.js, Flask and NumPy</li>
                            </ul>
                        </div>
                        <div id="synesthetic" className="exprience-section">
                            <img src="/images/synesthetic.png" />
                            <p className="labeler">Software Engineer at Synesthetic Solutions</p>
                            <ul>
                                <li>I am a software engineer in a 5 person startup to prototype and design a cane for the visually impaired using stereo cameras and machine vision to give the user much more information about their environment than ususally accessible</li>
                                <li>The current development we are doing is mainly in Python and openCV</li>
                                <li>The project is funded and backed by the UCSD Basement, an on campus incubator</li>
                            </ul>
                        </div>
                    </div>
                    <RainbowButton text="View My Resume" />
                </div>
            </section>
        )
    }


}