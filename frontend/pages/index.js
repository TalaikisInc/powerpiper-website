import { translate } from 'react-i18next'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Animate from 'grommet/components/Animate'

import Layout from '../layout'
import Page from '../components/Page'
import Subscribe from '../components/Subscribe'
import i18n from '../i18n'
const t = i18n.t.bind(i18n)

class Index extends Page {
  constructor() {
    super()
    this.state = {
      selected: 0
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(selected) {
    this.setState({
      ...this.state,
      selected
    })
  }

  render () {
    return (
      <Layout {...this.props}>
        <Section full={true} pad='none' align='center' justify='center'>
          <h1>{t('welcome')}</h1>
          <Subscribe />
        </Section>
        <Section full={true} pad='none' colorIndex='ascent-1'>
          <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }} keep={true}>
            <Heading align='center' justify='center'>
            Testing theme color
            </Heading>
          </Animate>
        </Section>
        <Section full={true} pad='none' colorIndex='neutral-1'>
          <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }} keep={true}>
            <Heading>
            Section3
            </Heading>
          </Animate>
        </Section>
        <Section full={true} pad='none' colorIndex='ascent-1'>
          Section4
        </Section>
      </Layout>
    )
  }
}

Index.defaultProps = {
  title: 'Decentralized Energy Marketplace',
  description: 'Decentralized Energy Marketplace',
  image: ''
}

const Extended = translate(['index'], { i18n, wait: process.browser })(Index)

Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) {
    return i18n.getInitialProps(req, ['index'])
  }
  return {}
}

export default Extended
