import { Component, Fragment } from 'react'
import Router from 'next/router'
import cookie from 'react-cookies'
import Head from 'next/head'
import PropTypes from 'prop-types'

import Article from 'grommet/components/Article'
import Layer from 'grommet/components/Layer'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Header from 'grommet/components/Header'
import SVGIcon from 'grommet/components/SVGIcon'
import Menu from 'grommet/components/Menu'
import MenuIcon from 'grommet/components/icons/base/Menu'
import Button from 'grommet/components/Button'
import Animate from 'grommet/components/Animate'
import Section from 'grommet/components/Section'
import scss from '../assets/scss/theme.scss'
import nprogress from '../assets/css/progress.css'
import NProgress from 'nprogress'

import _Footer from '../components/Footer'
import Meta from '../components/Meta'
import Title from '../components/Title'
import { initGA, logPageView } from '../components/GA'
import Cookies from '../components/Cookies'
import Signin from '../components/Signin'
//import UserMenu from '../components/UserMenu'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends Component {
  static async getInitialProps ({ req }) {
    return { documentPath: req.url }
  }

  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  async componentWillMount() {
    this.state = {
      policy: cookie.load('cookie-policy') || false,
      keep: true
    }
  }

  async componentDidMount () {
    if (!window.GA_INITIALIZED && this.props.documentPath) {
      initGA(this.props.documentPath)
      window.GA_INITIALIZED = true
    }
    if (this.state.modal !== true) {
      Cookies.save('redirect_url', window.location.pathname)
    }
  }

  onOpenModal(e) {
    if (e) {
      e.preventDefault()
    }
    this.setState({ modal: true })
  }

  onCloseModal () {
    this.setState({ modal: false })
  }

  onButtonClick = () => {
    this.setState({
      policy: true,
      keep: false
    })
    cookie.save('cookie-policy', this.state.policy, { path: '/' })
  }

  render () {
    const state = this.state
    const siteTitle = process.env.SITE_TITLE
    const author = process.env.SITE_TITLE
    const baseURL = process.env.BASE_URL || ''
    let layerNode

    if (this.state.modal) {
      layerNode = (
        <Layer flush={true} closer={true} onClose={this.onCloseModal} align='center'>
          <Box pad='large' colorIndex='grey-3'>
            <Label>
              Sign In / Sign Up
            </Label>
            <Signin session={this.props.session}/>
          </Box>
        </Layer>
      )
    }

    return (
      <Fragment>
        <Head>
          {Title({ title: this.props.title, siteTitle: siteTitle })}
          {Meta({ props: this.props, baseURL: baseURL, siteTitle: siteTitle, author: author })}
          <style dangerouslySetInnerHTML={{ __html: nprogress }} />
          <style dangerouslySetInnerHTML={{ __html: scss }} />
        </Head>
        <Header size='small' fixed={true} direction='row' pad={{ horizontal: 'medium' }} align='center'>
          <SVGIcon viewBox='0 0 130 108'
            version='1.1'
            type='logo'
            a11yTitle='PowerPiper'>
            <g stroke='#865CD6'
              strokeWidth='4'
              fill='none'
              strokeLinejoin='round'>
              <path d='M40,65 L40,96 L16,107 L16,49 L16,49 L28.4679195,43.2855369 M75.6892892,43.6424091 L88,38 L88,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z M52,49 C56.971,49 61,44.971 61,40 C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 C43,44.971 47.029,49 52,49 L52,49 Z M52,76 C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 C76,58 52,76 52,76 Z' />
            </g>
          </SVGIcon>
          <Box flex={true} justify='end' direction='row' responsive={false} pad='none'>
            <Menu icon={<MenuIcon />} direction='row' label='Menu' align='start' justify='between' size='small'>
              <a href='/blog/' className='grommetux-anchor' onMouseEnter={() => { Router.prefetch('/') }}>Blog</a>
              <Button label="Sign In / Sign Up" onClick={this.onOpenModal} />
            </Menu>
          </Box>
        </Header>
        {
          !state.keep && <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 400 }} keep={state.keep}>
            <Section pad='small' align='center' justify='center'>
              <Label>
                This site uses cookies. Click 'OK' if that's OK with you. You can also familiarize yourself with our <a href='/cookie_policy/'>Cookie Policy</a> or <a href='/privacy_policy/'>Privacy Policy</a>.
              </Label>
              <Button critical={true} label='OK' onClick={this.onButtonClick} />
            </Section>
          </Animate>
        }
        { layerNode }
        <Article responsive={true} margin='none' flex={false} primary={true}>
          { this.props.children }
        </Article>
        { logPageView() }
        {_Footer()}
      </Fragment>
    )
  }
}

Layout.propTypes = {
  session: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
