import { Component } from 'react';
import PropTypes from 'prop-types';

class FontAwesome extends Component {
  render () {
    const {props} = this.props;
    return (
      <i className={`fa fa-${this.props.name} ${this.props.className} fa-${this.props.size}`} alt={this.props.ariaLabel} style={{ padding: '0.5em'}}></i>
    );
  }
}

FontAwesome.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.string,
};

export default FontAwesome;
