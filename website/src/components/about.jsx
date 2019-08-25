import React from 'react';



export default class Header extends React.Component {



    render() {
        return (
            <section id="about">
                <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                    <path id="path" d="M0 0 L50 100 L100 0 Z" />
                </svg>
                <div className="container">
                    <div className="col-xs-12 z-high" >
                        <h1>About Me</h1>
                        <p className="pushed-down">&nbsp;</p>
                    </div>
                </div>
                <EachSection pTag={
                    <p className="about-text first-about">
                        I am currently a Junior in<br />
                        Warren College at UC San Diego<br />
                        studying Computer Science<br /><br />
                    </p>}
                    image="geisal"

                />


                <EachSection pTag={
                    <p className="about-text">
                        I've made a lot of great friends<br />
                        and found a lot of great projects<br /><br />
                        So far I've really enjoyed my time at UCSD<br />
                        and hope to continue doing cool things<br />
                    </p>}
                    image="freinds"

                />

                
                <EachSection pTag={
                    <p className="about-text links">
                        Here's some of the cool things:<br />
                        <a href="https://vimeo.com/307802003" target="_blank">literally the best music video ever made</a><br />
                        <a href="https://www.youtube.com/watch?v=iq98nd9kX_c" target="_blank">meme</a><br />
                        <a href="https://www.youtube.com/watch?v=stTeR3MyQ98" target="_blank">another meme</a><br />
                        <a href="https://github.com/cyficowley/2404_faces" target="_blank">A cool project I coded</a><br />
                        <a href="https://photos.app.goo.gl/pUyxmwxFCvowsSuD9" target="_blank">A lot of pictures im too lazy to upload to here</a><br />
                    </p>}
                    image="surfin"

                />
            </section>

        )
    }


}

class EachSection extends React.Component {

    constructor(props) {
        super(props);
        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo(to, duration) {
        const
            element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            },
            animateScroll = function () {
                const currentDate = +new Date();
                const currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
                else {
                    element.scrollTop = to;
                }
            };
        animateScroll();
    };


    handleClick(e) {
        let element = e.target;
        element.parentNode.parentNode.classList.toggle("full-screen");
        if (element.parentNode.parentNode.classList.contains("full-screen")) {
            this.scrollTo(element.offsetTop - 84, 1000);
        }

    }


    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        {this.props.pTag}
                    </div>
                </div>
                <div className="background-image noselect" id={this.props.image} onClick={(e) => this.handleClick(e)}><div className="background-cover"><h3>Click to Expand</h3></div></div>

            </div>
        )
    }
}