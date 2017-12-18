import { Component } from 'react';
import ReactGa from 'react-ga';

import config from './config';

function GAInitialize() {
  const { trackerId, ...configObject } = config;
  ReactGA.initialize(trackerId, {
    ...configObject
  });
}

function LogPageView () {
  GAInitialize();
  if (typeof window !== undefined) {
    ReactGa.set({
      page: window.location.pathname
    });
    ReactGa.pageview(window.location.pathname);
  }
}

function LogEvent (cat, action) {
  GAInitialize();
  ReactGA.event({
    category: cat,
    action: action
  });
}

class GA extends Component {
  constructor(props) {
    super();
    //props.log == 'pageview' ? LogPageView() : undefined
    //props.log == 'evevt' ? LogEvent(props.cat, props.action) : undefined
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default GA;
