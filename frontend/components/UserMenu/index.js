import { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Anchor from 'grommet/components/Anchor'
import ContactInfoIcon from 'grommet/components/icons/base/ContactInfo'
import LoginIcon from 'grommet/components/icons/base/Login'

class UserMenu extends Component {
  render() {
    if (this.props.session && this.props.session.user) {
      const session = this.props.session
      return (
        <Link href="/dashboard/">
          <Anchor href='/dashboard/' icon={<ContactInfoIcon />} label={session.user.name || session.user.email} />
        </Link>
      )
    } else {
      return (
        <Anchor icon={<LoginIcon />} label='Sign In' onClick={this.props.onOpenModal} />
      )
    }
  }
}

UserMenu.propTypes = {
  session: PropTypes.object,
  onOpenModal: PropTypes.func.isRequired
}

export default UserMenu
