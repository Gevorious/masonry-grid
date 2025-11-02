import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from './types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div<{ size: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${spin} 0.8s linear infinite;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
  }
`;

const Spinner = ({ size = 28 }: SpinnerProps) => {
  return (
    <SpinnerWrapper size={size} className="spinner">
      <FaSpinner />
    </SpinnerWrapper>
  );
};

export default Spinner;
