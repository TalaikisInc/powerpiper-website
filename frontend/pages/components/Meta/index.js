import { Component } from 'react';
import PropTypes from 'prop-types';

class Meta extends Component {
  render () {
    const {props} = this.props;
    return (
        <div>
          <meta name='title' content={this.props.title} />
          <meta name='description' content={this.props.description} />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
          <meta name="author" content={this.props.author} />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta property='og:site_name' content={this.props.siteTitle} />
          <meta property='og:title' content={this.props.title} />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={this.props.baseURL} />
          <meta property='og:image' content={this.props.image} />
          <meta name='twitter:site' content='@ThePowerPiper' />
        </div>
    );
  }
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  baseURL: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Meta;
