import Router from 'next/router'
import cookie from 'react-cookies'

import Section from 'grommet/components/Section'

import Page from '../../components/Page'
import Layout from '../../layout'
import Session from '../../components/Session'
import Signin from '../../components/Signin'

export default class extends Page {
  static async getInitialProps({ req, res, query }) {
    const session = await Session.getSession({ force: true, req: req })
    if (session.user && req) {
      res.redirect('/auth/callback')
    } else {
      Router.push('/auth/callback')
    }
    if (query.redirect && res) {
      res.cookie('redirect_url', query.redirect)
    } else {
      cookie.save('redirect_url', query.redirect, { path: '/' })
    }

    return {
      session: session
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      session: this.props.session
    }
  }

  async componentDidMount() {
    this.setState({
      session: await Session.getSession({ force: true })
    })
  }

  render() {
    return (
      <Layout session={this.state.session}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Signin session={this.state.session} />
        </Section>
      </Layout>
    )
  }
}
