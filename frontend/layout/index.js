import { Component, Fragment } from 'react'
import Router from 'next/router'
import cookie from 'react-cookies'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'

import scss from '../assets/scss/theme.scss'
import nprogress from '../assets/css/progress.css'
import App from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Layer from 'grommet/components/Layer'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Header from 'grommet/components/Header'
import SVGIcon from 'grommet/components/SVGIcon'
import Columns from 'grommet/components/Columns'
import BlogIcon from 'grommet/components/icons/base/Blog'
import ContactInfoIcon from 'grommet/components/icons/base/ContactInfo'
import LoginIcon from 'grommet/components/icons/base/Login'
import Button from 'grommet/components/Button'
import Animate from 'grommet/components/Animate'
import Section from 'grommet/components/Section'
import Anchor from 'grommet/components/Anchor'
import NProgress from 'nprogress'

import _Footer from '../components/Footer'
import Meta from '../components/Meta'
import Title from '../components/Title'
import { initGA, logPageView } from '../components/GA'
import Cookies from '../components/Cookies'
import Signin from '../components/Signin'

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
    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.state = {
      modal: undefined
    }
  }

  componentWillMount() {
    this.state = {
      policy: cookie.load('cookie-policy') || false,
      keep: true
    }
  }

  async componentDidMount () {
    if (!window.GA_INITIALIZED && this.props.documentPath && this.state.policy) {
      initGA(this.props.documentPath)
      window.GA_INITIALIZED = true
    }
    if (this.state.modal !== true) {
      Cookies.save('redirect_url', window.location.pathname)
    }
  }

  onOpenModal() {
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
    console.log(this.state.keep)
    return (
      <Fragment>
        <Head>
          {Title({ title: this.props.title, siteTitle: this.props.siteTitle })}
          {Meta({ props: this.props, baseURL: this.props.baseURL, siteTitle: this.props.siteTitle, author: this.props.author })}
          <link rel='canonical' href={this.props.baseURL} />
          <link href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
          <style dangerouslySetInnerHTML={{ __html: nprogress }} />
          <style dangerouslySetInnerHTML={{ __html: scss }} />
        </Head>
        <App centered={false}>
          <Header size='small' fixed={true} direction='row' pad={{ horizontal: 'medium' }} align='center'>
            <Link prefetch href="/">
              <SVGIcon viewBox='0 0 130 108'
                version='1.1'
                type='logo'
                a11yTitle='PowerPiper'>
                <g stroke='#865CD6'
                  strokeWidth='4'
                  fill='none'
                  strokeLinejoin='round'>
                  <path d='M40,65 L40,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z M52,49 C56.971,49 61,44.971 61,40 C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 C43,44.971 47.029,49 52,49 L52,49 Z M52,76 C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 C76,58 52,76 52,76 Z' />
                </g>
              </SVGIcon>
            </Link>
            <Box flex={true} justify='end' direction='row' responsive={false} pad='none'>
              <Columns maxCount={2} responsive={true} justify='end' size='small'>
                <Box align='end' alignContent='end' responsive={true}>
                  <UserMenu session={this.props.session} onOpenModal={this.onOpenModal}/>
                  <SigninModal modal={this.state.modal} onCloseModal={this.onCloseModal} onOpenModal={this.onOpenModal} session={this.props.session} />
                </Box>
                <Box align='end' alignContent='end' responsive={true}>
                  <Link prefetch href="/blog/">
                    <Anchor href='/blog/' icon={<BlogIcon />} label='Blog' />
                  </Link>
                </Box>
              </Columns>
            </Box>
          </Header>
          {
            !this.state.policy && <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 400 }} keep={this.state.keep}>
              <Section pad='small' align='center' justify='center'>
                <Label>
                  This site uses cookies. Click 'OK' if that's OK with you. You can also familiarize yourself with our <a href='/cookie_policy/'>Cookie Policy</a> or <a href='/privacy_policy/'>Privacy Policy</a>.
                </Label>
                <Button critical={true} label='OK' onClick={this.onButtonClick} />
              </Section>
            </Animate>
          }
          <MainBody>
            { this.props.children }
          </MainBody>
          { logPageView() }
          {_Footer()}
        </App>
      </Fragment>
    )
  }
}

// eslint-disable-next-line
export class MainBody extends Component {
  render() {
    return (
      <Fragment>
        <Article responsive={true} margin='none' flex={false} primary={true}>
          { this.props.children }
        </Article>
      </Fragment>
    )
  }
}

// eslint-disable-next-line
export class UserMenu extends Component {
  render() {
    if (this.props.session && this.props.session.user) {
      const session = this.props.session
      return (
        <Link href="/account/">
          <Anchor href='/account/' icon={<ContactInfoIcon />} label={session.user.name || session.user.email} />
        </Link>
      )
    } else {
      return (
        <Anchor icon={<LoginIcon />} label='Sign In / Sign up' onClick={this.props.onOpenModal} />
      )
    }
  }
}

// eslint-disable-next-line
export class SigninModal extends Component {
  render() {
    return (
      <div>
        { this.props.modal && <Layer flush={true} closer={true} onClose={this.props.onCloseModal} align='center'>
          <Box pad='medium'>
            <Label>
              Sign In / Sign Up
            </Label>
            { /* <Signin session={this.props.session} />*/ }
          </Box>
        </Layer>
        }
      </div>
    )
  }
}

Layout.defaultProps = {
  siteTitle: process.env.SITE_TITLE,
  author: process.env.SITE_TITLE,
  baseURL: process.env.BASE_URL || ''
}

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  baseURL: PropTypes.string.isRequired,
  session: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}
