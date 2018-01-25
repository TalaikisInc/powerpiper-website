import { Component, Fragment, PropTypes } from 'react'
//import Router from 'next/router'
import { connect } from 'react-redux'

import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook'
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialGooglePlus from 'grommet/components/icons/base/SocialGooglePlus'
import SocialLinkedIn from 'grommet/components/icons/base/SocialLinkedin'
import Tabs from 'grommet/components/Tabs'
import Tab from 'grommet/components/Tab'

import Actions from '../../utils/actions'
//import Session from '../Session'

class Signin extends Component {
  static propTypes() {
    return {
      session: PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      session: this.props.session
    }
    this._handleSignin = this._handleSignin.bind(this)
    this._handleSignup = this._handleSignup.bind(this)
    this._handleEmailChange = this._handleEmailChange.bind(this)
    this._handlePasswordChange = this._handlePasswordChange.bind(this)
  }

  _handleEmailChange(event) {
    this.setState({
      email: event.target.value.trim()
    })
  }

  _handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  _handleSignin = e => {
    this.props.dispatch(Actions.requestSignin(this.state))
  }

  _handleSignup = e => {
    this.props.dispatch(Actions.requestSignup(this.state))
  }

  /*async handleSubmit(event) {
    event.preventDefault()
    await Session.signin(this.state.email)
      .then(() => {
        Router.push('/auth/check-email')
      })
      .catch(err => {
        console.error(err)
      })
  }*/

  render() {
    return (
      <Fragment>
        <Label>If you don't have an account yet, one will be created when you sign in with any of followiung social networks:</Label>
        <Box>
          <Columns responsive={true} maxCount={4} size='small'>
            <Box>
              <p><a href="/auth/oauth/facebook"><SocialFacebook a11yTitle='Sign In with Facebook' /></a></p>
            </Box>
            <Box>
              <p><a href="/auth/oauth/google"><SocialGooglePlus a11yTitle='Sign In with Google' /></a></p>
            </Box>
            <Box>
              <p><a href="/auth/oauth/twitter"><SocialTwitter a11yTitle='Sign In with Twitter' /></a></p>
            </Box>
            <Box>
              <p><a href="/auth/oauth/linkedin"><SocialLinkedIn a11yTitle='Sign In with LinkedIn' /></a></p>
            </Box>
          </Columns>
        </Box>
        <Label>Or you can sign up using your email:</Label>
        <Tabs responsive={true} justify='center'>
          <Tab title='Sign In'>
            <Box>
              { /* action="/auth/email/signin" */ }
              <form id="signin" method="post" onSubmit={this.handleSignin}>
                <input name="_csrf" type="hidden" value={this.props.csrfToken} />
                <Paragraph>
                  <Label htmlFor="email">Email address</Label><br/>
                  <input name="email" type="text" placeholder="j.smith@example.com" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                  <input name="password" type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </Paragraph>
                <button type="submit">Sign in</button>
              </form>
            </Box>
          </Tab>
          <Tab title='Sign Up'>
            <Box>
              <form id="signup" method="post" onSubmit={this.handleSignup}>
                <input name="_csrf" type="hidden" value={this.props.csrfToken} />
                <Paragraph>
                  <Label htmlFor="email">Email address</Label><br/>
                  <input name="email" type="text" placeholder="j.smith@example.com" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                  <input name="password" type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
                  <input name="verify" type="password" id="password" value={this.state.verify} onChange={this.handlePasswordChange} />
                </Paragraph>
                <button type="submit">Sign up</button>
              </form>
            </Box>
            test
          </Tab>
        </Tabs>
      </Fragment>
    )
  }
}

export default connect(state => state)(Signin)
