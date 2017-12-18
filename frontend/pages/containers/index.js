import 'grommet/scss/vanilla/index';

import { Helmet } from "react-helmet";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';

import Head from '../components/Header'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe';
import Copy from '../components/Copy'

class Main extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <title>PP app</title>
          <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
          <link href="//fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Helmet>
        <App centered={false}>
          <Header />
          <Subscribe />
          <Footer />
          <Copy />
        </App>
      </div>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
