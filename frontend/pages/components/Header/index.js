import Header from 'grommet/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import SVGIcon from 'grommet/components/SVGIcon';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Heading from 'grommet/components/Heading';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
  //console.log(`Loading: ${url}`)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const _Header = () => {
  return (
    <div>
      <Head>
        <link rel='stylesheet' type='text/css' href='../../assets/css/progress.css' />
      </Head>
      <Header size='small' fixed={true} direction='row' pad='small' align='center'>
        <SVGIcon viewBox='0 0 130 108'
          version='1.1'
          type='logo'
          a11yTitle='Locations Finder'>
          <g stroke='#865CD6'
            strokeWidth='4'
            fill='none'
            strokeLinejoin='round'>
            <path d='M40,65 L40,96 L16,107 L16,49 L16,49 L28.4679195,43.2855369 M75.6892892,43.6424091 L88,38 L88,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z M52,49 C56.971,49 61,44.971 61,40 C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 C43,44.971 47.029,49 52,49 L52,49 Z M52,76 C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 C76,58 52,76 52,76 Z' />
          </g>
        </SVGIcon>
        <Box flex={true} justify='end' direction='row' responsive={false}>
          <Menu direction='row' align='start' justify='between' size='small' primary={true} fill={true} inline={true}>
            <Link href='/'>Home</Link>
          </Menu>
          <Menu direction='row' align='start' justify='between' size='small' primary={true} fill={true} inline={true}>
            <Link href='/register'>Login/ Register</Link>
          </Menu>
        </Box>
      </Header>
    </div>
  )
}

export default _Header;
