import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'

const Copy = () => {
  return (
    <Box responsive={true} align='center' size='xsmall'>&copy; {(new Date().getFullYear())}
      <span dangerouslySetInnerHTML={{ __html: ` ${process.env.SITE_TITLE}`}} />
      <Anchor href='/privacy_policy/' label='Privacy Policy' /> | <Anchor href='/cookie_policy/' label='Cookie Policy' />
    </Box>
  )
}

export default Copy
