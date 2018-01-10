import Page from '../../../components/Page'
import Layout from '../../../layout'

export default class extends Page {
  render() {
    return (
      <Layout session={this.props.session}>
        <div>
          <h1>Support for this service is not configured</h1>
          <p>Support for the requested oAuth provider has not been configured.</p>
          <p><a href="/auth/signin">Use another method to sign in.</a></p>
        </div>
      </Layout>
    )
  }
}
