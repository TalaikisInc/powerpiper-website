import Page from '../../../components/Page'
import Layout from '../../../layout'

export default class extends Page {
  render() {
    return (
      <Layout session={this.props.session}>
        <div>
          <h1>Unable to sign in</h1>
          <p>If you have signed up using a different service, use that method to sign in, or sign in with email.</p>
          <p><a href="/auth/signin">Try signing in with your email address or using another service.</a></p>
        </div>
        <h3>Why am I seeing this?</h3>
        <p>
          An account associated with your email address may already exist. To verify your identity - and prevent someone from
          trying to hijack your account by signing up to another service with your email address - you need to sign in to this site
          using your email address. Once you are signed in you link accounts so you can use any method to sign in.
        </p>
      </Layout>
    )
  }
}
