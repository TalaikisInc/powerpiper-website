import Page from '../../../components/Page'
import Layout from '../../../layout'

export default class extends Page {
  render() {
    return (
      <Layout session={this.props.session}>
        <div>
          <h1>Unable to sign in</h1>
          <p>The link you tried to use to sign in was not valid.</p>
          <p><a href="/auth/signin">Request a new sign in link.</a></p>
        </div>
      </Layout>
    )
  }
}
