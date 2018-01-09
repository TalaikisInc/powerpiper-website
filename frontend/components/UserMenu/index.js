import { Component } from 'react'
import Link from 'next/link'

export class UserMenu extends Component {
  render() {
    if (this.props.session && this.props.session.user) {
      const session = this.props.session
      return (
        <Link href='/account/'><a href="/account/"> {session.user.name || session.user.email}</a></Link>
      )
    } else {
      return (
        <div>
          {/**
              * @TODO Add support for passing current URL path as redirect URL
              * so that users without JavaScript are also redirected to the page
              * they were on before they signed in.
              **/}
          <a href="/auth/signin?redirect=/">Sign up / Sign in</a>
        </div>
      )
    }
  }
}
