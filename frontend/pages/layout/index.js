import { Component } from 'react';
import PropTypes from 'prop-types';
import { initGA, logPageView } from '../components/GA';
import Head from 'next/head';

import Meta from '../components/Meta';
import Title from '../components/Title';

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
        <Head>
          <link rel='canonical' href={this.props.baseURL} />
          <Title title={this.props.title} siteTitle={this.props.siteTitle} />
          <link href='//fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css' />
          <link href='//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css' rel='stylesheet' type='text/css' />
          <link href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
          
        </Head>
      </div>
    )
  }
}

Layout.propTypes = {
  baseURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Layout;
