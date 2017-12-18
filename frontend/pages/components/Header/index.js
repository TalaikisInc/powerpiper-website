import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Toast from 'grommet/components/Toast';;

import Wrapper from './wrapper';

const _Header = () => {
  return (
    <div>
      <Header size='small' fixed={true} direction='row' pad='small' align='center' colorIndex='neutral-1'>
        <Title responsive={true} size='small'>POWERPIPER</Title>
      </Header>
    </div>
  )
}

export default _Header;
