import Router from 'next/router'
import { Component } from 'react'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

import Layout from '../../layout'
import Session from '../../components/Session'

export default class CheckEmail extends Component {
  static async getInitialProps({ req, res }) {
    const session = await Session.getSession({force: true, req: req})
    if (session.user) {
      if (req) {
        res.redirect('/auth/callback')
      } else {
        Router.push('/auth/callback')
      }
    }

    return {
      session: session
    }
  }

  render() {
    return (
      <Layout {...this.props}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Heading>Check your email</Heading>
          <Paragraph>Check your email for a sign in link.</Paragraph>
        </Section>
      </Layout>
    )
  }
}
