import { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render () {
    const {props} = this.props;
    return (
        <title>{this.props.title} | {this.props.siteTitle}</title>
    );
  }
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
};

export default Title;
