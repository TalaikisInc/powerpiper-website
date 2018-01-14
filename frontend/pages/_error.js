import React from 'react'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

import Layout from '../layout'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return {
      error: statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'
    }
  }

  render() {
    this.props.title = 'Error ' + this.props.error

    return (
      <Layout {...this.props}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Heading>
            Error encountered
          </Heading>
          <Paragraph>
            { this.props.error }
          </Paragraph>
        </Section>
      </Layout>
    )
  }
}

Error.defaultProps = {
  description: '',
  image: '',
  menu: false
}
