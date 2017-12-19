import { Component } from 'react';
import { initGA, logPageView } from '../components/GA';

class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView()
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
