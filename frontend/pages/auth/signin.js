import Router from 'next/router'

import Section from 'grommet/components/Section'

import Page from '../../components/Page'
import Layout from '../../layout'
import Session from '../../components/Session'
import Signin from '../../components/Signin'
import Cookies from '../../components/Cookies'

export default class extends Page {
  static async getInitialProps({ req, res, query }) {
    const session = await Session.getSession({ force: true, req: req })
    if (session.user) {
      if (req) {
        // Server side redirect
        res.redirect('/auth/callback')
      } else {
        // Client side redirect
        Router.push('/auth/callback')
      }
    }

    if (query.redirect) {
      if (res) {
        res.cookie('redirect_url', query.redirect)
      } else {
        Cookies.save('redirect_url', query.redirect)
      }
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
