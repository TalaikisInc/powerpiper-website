import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'

import Page from '../../../components/Page'
import Layout from '../../../layout'

export default class extends Page {
  render() {
    const title = 'Not Configured'

    return (
      <Layout session={this.props.session} title={title}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Box>
            <Heading>Support for this service is not configured</Heading>
            <Label>Support for the requested oAuth provider has not been configured.</Label>
            <Label><a href="/auth/signin" className="grommetux-anchor">Use another method to sign in.</a></Label>
          </Box>
        </Section>
      </Layout>
    )
  }
}
