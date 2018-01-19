import { PropTypes } from 'prop-types'
const siteTitle = process.env.SITE_TITLE ? ' | ' + process.env.SITE_TITLE : ''

const Title = (props) => {
  return <title>{props.title}{siteTitle}</title>
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
