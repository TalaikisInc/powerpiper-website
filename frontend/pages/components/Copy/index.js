import { Component } from 'react';
import PropTypes from 'prop-types';

class Copy extends Component {
    render() {
      const {props} = this.props;
      return <div>&copy; {(new Date().getFullYear())} {this.props.title}</div>;
    }
  }
  
  Copy.propTypes = {
    title: PropTypes.string.isRequired,
  };

  export default Copy;