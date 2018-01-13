import { Component } from 'react'

import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'

import Layout from '../../../layout'

export default class EmailError extends Component {
  render() {
    const title = 'Sign In Error'

    return (
      <Layout session={this.props.session} title={title}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Box>
            <Heading>Unable to sign in</Heading>
            <Label>The link you tried to use to sign in was not valid.</Label>
            <Label><a href="/auth/signin" className="grommetux-anchor">Request a new sign in link.</a></Label>
          </Box>
        </Section>
      </Layout>
    )
  }
}
