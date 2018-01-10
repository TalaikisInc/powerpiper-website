import Router from 'next/router'

import Page from '../../components/Page'
import Layout from '../../layout'
import Session from '../../components/Session'

export default class extends Page {
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
        <div>
          <h1>Check your email</h1>
          <p>Check your email for a sign in link.</p>
        </div>
      </Layout>
    )
  }
}
