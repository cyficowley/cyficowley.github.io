import React from 'react';
import '../styles/rainbowButton.css';

export default class RainbowButton extends React.Component {
    componentDidMount() {
        let animationFrame = undefined;
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
            animationFrame = requestAnimationFrame(change);
        })();
    }

    render() {
        return (
            <div class="col-md-8 col-md-offset-2 col-xs-12">
                <div id="cool-button">
                    <h3 id="rainbowy" class="unselectable">{this.props.text}</h3>
                </div>
            </div>
        )
    }
}