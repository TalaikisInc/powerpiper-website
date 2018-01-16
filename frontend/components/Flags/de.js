import SVGIcon from 'grommet/components/SVGIcon'

import Wrapper from './wrapper'

const DE = (props) => {
  return (
    <Wrapper>
      <SVGIcon viewBox='0 0 50 75' version='1.1' type='logo' a11yTitle={props.label}>
        <rect id="black_stripe" width="50" height="37.5" y="0" x="0" fill="#000"/>
        <rect id="red_stripe" width="50" height="25" y="1" x="0" fill="#D00"/>
        <rect id="gold_stripe" width="50" height="12.5" y="2" x="0" fill="#FFCE00"/>
      </SVGIcon>
        &nbsp;{ props.label }
    </Wrapper>
  )
}

export default DE
