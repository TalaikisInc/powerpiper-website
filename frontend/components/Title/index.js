import PropTypes from 'prop-types'

const siteTitle = process.env.SITE_TITLE

const Title = (props) => {
  const title = `${props.title} | ${siteTitle}`

  return (
    <title>{ title }</title>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
