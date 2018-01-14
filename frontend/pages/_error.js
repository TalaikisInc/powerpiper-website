import React from 'react'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

import Layout from '../layout'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    this.error = this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'

    return (
      <Layout {...this.props}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Heading>
            Error encountered
          </Heading>
          <Paragraph>
            { this.error }
          </Paragraph>
        </Section>
      </Layout>
    )
  }
}

Error.defaultProps = {
  title: 'Error ' + this.error,
  description: '',
  image: ''
}
