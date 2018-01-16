import SVGIcon from 'grommet/components/SVGIcon'

import Wrapper from './wrapper'

const FR = (props) => {
  return (
    <Wrapper>
      <SVGIcon viewBox='0 0 50 75' version='1.1' type='logo' a11yTitle={props.label}>
        <rect width="25" height="75" fill="#ED2939"/>
        <rect width="16.67" height="75" fill="#fff"/>
        <rect width="8.33" height="75" fill="#002395"/>
      </SVGIcon>
        &nbsp;{ props.label }
    </Wrapper>
  )
}

export default FR
