import React from 'react';

export default class RainbowButton extends React.Component {
    constructor(props) {
        super(props);
        this.goToResume = this.goToResume.bind(this);
    }


    componentDidMount() {
        let angle = 0;
        let p = document.getElementById('rainbowy');
        let text = p.innerHTML.split('');
        let len = text.length;
        let phaseJump = 360 / len;
        let spans;

        p.innerHTML = text.map(function (char) {
            return '<span>' + char + '</span>';
        }).join('');

        spans = p.children;

        (function change() {
            for (let i = 0; i < len; i++) {
                spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 100%, 70%)';
            }
            angle++;
            requestAnimationFrame(change);
        })();
    }

    goToResume() {
        var win = window.open("https://docs.google.com/document/d/1IZiAUkQdxRdKNOz5MkYJrdOlpUGjD3BeFINsQIVn3v4/export?format=pdf", '_blank');
        win.focus();
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div id="cool-button">
                    {/* <a id="rainbow-button-link" className="noselect" target="_blank" href="https://docs.google.com/document/d/1IZiAUkQdxRdKNOz5MkYJrdOlpUGjD3BeFINsQIVn3v4/export?format=pdf"> */}
                    <h3 id="rainbowy" onClick={this.goToResume} className="unselectable noselect">{this.props.text}</h3>
                    {/* </a> */}
                </div>
            </div>
        )
    }
}