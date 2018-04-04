import React from 'react';
import '../styles/skills.css';
import RainbowButton from './rainbowButton.jsx'

export default class Skills extends React.Component {

    render() {
        return (
            <section id="skills">
                <div class="container">
                    <div class="col-xs-12" id="stick-to-top">&nbsp;</div>
                    <div class="col-md-8 col-md-offset-2 col-xs-12 centered">
                        <h2>My Work Experience</h2>
                        <hr/>
                        <div id="Malwarebytes" class="exprience-section">
                            <img src="/images/Malwarebytes.png"/>
                            <p class="labeler">Intern in quality assurance over the summer of 2017</p>
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
                        <div id="rose" class="exprience-section">
                            <img src="/images/rosegs.png"/>
                            <p class="labeler">Developed WordPress site for Rose Garden Software summer of 2016</p>
                            <ul>
                                <li>Spent a summer working part for Ed Gavin, rebuilding his company's site <a target="_blank" href="http://www.rosegardensoftware.com/test/">RoseGardenSoftware.com</a>
                                </li>
                                <li>Built site on WordPress, story boarding then customizing it to his specifications</li>
                                <li>(He has yet to complete the content on the site so some sections are still filled with the defaults I
                                    put there)</li>
                            </ul>
                        </div>
                        <div id="peery" class="exprience-section">
                            <img src="/images/peery.svg"/>
                            <p class="labeler">Taught Piano with the Peery Piano Academy for 4 years</p>
                            <ul>
                                <li>Enrolled in the <a target="_blank" href="https://www.peeryacademy.com/">Peery Piano Academy</a> until I was skilled enough to become a teacher for the academy
                                    <ul>
                                        <li>Taught students aged five to fifteen classical piano with weekly lessons</li>
                                        <li>The students learned in a group setting with an average of four students in a lesson</li>
                                        <li>Worked with the students both all at once and one on one</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <RainbowButton text="View My Resume"/>
                </div>
            </section>
        )
    }


}