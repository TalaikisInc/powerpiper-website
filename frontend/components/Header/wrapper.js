
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const bounceAnimation = keyframes`${bounceIn}`;

const Wrapper = styled.div`
    font-family: Trench;
    animation: 1s ${bounceAnimation};
`;

export default Wrapper;
