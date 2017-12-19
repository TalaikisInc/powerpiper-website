import PropTypes from 'prop-types'

const Copy = (props) => {
  return <div>&copy; {(new Date().getFullYear())} {props.title}</div>
}
  
  Copy.propTypes = {
    title: PropTypes.string.isRequired,
  }

  export default Copy
  