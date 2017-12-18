import PropTypes from 'prop-types';

const Title = (props) => {
  return <title>{props.title} | {props.siteTitle}</title>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
};

export default Title;
