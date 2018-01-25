import { Component } from 'react'
import PropTypes from 'prop-types'

import Layer from 'grommet/components/Layer'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import Signin from '../Signin'

class SigninModal extends Component {
  render() {
    return (
      <div>
        { this.props.modal && <Layer flush={true} closer={true} onClose={this.props.onCloseModal} align='center'>
          <Box pad='medium' responsive={true}>
            <Heading>
              Sign In / Sign Up
            </Heading>
            <Signin session={this.props.session} />
          </Box>
        </Layer>
        }
      </div>
    )
  }
}

SigninModal.propTypes = {
  modal: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
  session: PropTypes.string
}

export default SigninModal
