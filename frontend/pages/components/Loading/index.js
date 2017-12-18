import { Component } from 'react';
import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/Spinning';

const WithLoading = ({ children }) => {
    if (!children) {
      return(
        <Box>
          <Spinning size='large' />
        </Box>
      );
    }
    return children;
  }
  
  class Loading extends Component {
    constructor() {
      super();
      this.state = {
        asyncContent: undefined
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          asyncContent: (this.props.content)
        })
      }, 1000);
    }
    render () {
      return (
        <Main />
      );
    }
  };
  
  export default Loading;
