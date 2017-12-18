/* FIXME */
import { Component } from 'react';

import Wrapper from './wrapper';

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
            <Wrapper>
                <div id='particles-js'></div>
            </Wrapper>
        )
    }
}

export default _Particles;
