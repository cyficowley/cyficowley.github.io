import React from 'react';

export default class RainbowButton extends React.Component {
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

    render() {
        return (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div id="cool-button">
                    <h3 id="rainbowy" className="unselectable">{this.props.text}</h3>
                </div>
            </div>
        )
    }
}