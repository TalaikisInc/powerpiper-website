import { Component } from 'react'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import App from 'grommet/components/App'
import Animate from 'grommet/components/Animate'
import { translate } from 'react-i18next'

import Layout from './layout'
import _Header from './components/Header'
import _Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import i18n from '../i18n'
const t = i18n.t.bind(i18n)

class Index extends Component {
  constructor() {
    super()
    this.state = {
      selected: 0
    }
    this._onSelect = this._onSelect.bind(this)
  }

  componentDidMount = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../sw.js')
    }
  }

  _onSelect(selected) {
    this.setState({
      ...this.state,
      selected
    });
  }
  
  render () {
    this.title = 'Decentralized Energy Marketplace'
    this.description = 'Decentralized Energy Marketplace'
    this.image = ''

    return (
      <App centered={false}>
        <Layout>
          {_Header({ title: this.title, description: this. description, image: this.image })}
          <Article responsive={true} margin='none' flex={false} primary={true}>
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
          </Article>
          {_Footer()}
        </Layout>
      </App>
    )
  }
}

const Extended = translate(['index'], { i18n, wait: process.browser })(Index)

Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) { return i18n.getInitialProps(req, ['index'])}
  return {}
}

export default Extended
