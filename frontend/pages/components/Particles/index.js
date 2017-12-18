/* FIXME */
import { Component } from 'react';

const isBrowser = typeof window !== 'undefined';
const P = isBrowser ? require('../../assets/js/particles.js') : undefined;

class _Particles extends Component {
    componentDidMount () {
        update = function() {
            P.requestAnimationFrame(update);
          };
          P.requestAnimationFrame(update);
    }
    render () {
        return (
            <div id='particles-js'></div>
        )
    }
}

export default _Particles;
