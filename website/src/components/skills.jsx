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
                        <div id="Intuit" className="exprience-section">
                            <img src="/images/intuit.png" />
                            <p className="labeler">Software Engineering Intern</p>
                            <ul>
                                <li>Designed, wrote and brought to production a Slack bot supporting the talent acquisition team of 200 people</li>
                                <li>Used a new fully serverless architecture that was over 20x cheaper to run for smaller use cases</li>
                            </ul>
                        </div>
                        <div id="Yonder" className="exprience-section">
                            <img src="/images/Yonder.svg" />
                            <p className="labeler">Software Lead</p>
                            <ul>
                                <li>Co-Lead a team of 15 other SWE students building a rover for the Mars Society's University Rover Challenge</li>
                                <li>The rover we build competes in a variety of different challenges that we have to design software for such asautonomous exploration, analyzing soil for life, and extreme retrieval tasks</li>
                                <li>I also wrote our super awesome website which is right <a target="_blank" href="https://yonderdynamics.org">here</a></li>
                            </ul>
                        </div>
                        <div id="Alta" className="exprience-section">
                            <img src="/images/alta-devices.png" />
                            <p className="labeler">Image processing and Software Engineering intern</p>
                            <ul>
                                <li>Used OpenCV in Python to automate the finding of defects in solar cells</li>
                                <li>Built a website for utilizing this functionality in React</li>
                                <li>Upgraded and built the FA job tracking system in React MySQL and Python</li>
                            </ul>
                        </div>
                        <div id="synesthetic" className="exprience-section">
                            <img src="/images/synesthetic.png" />
                            <p className="labeler">Software Engineer at Synesthetic Solutions</p>
                            <ul>
                                <li>I am a software engineer and Co-Owner in a startup to prototype and design a cane for the visually impaired using stereo cameras and machine vision to give the user much more information about their environment than ususally accessible</li>
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