import styled from 'styled-components';
import { GridWrapperProps } from './types';

const GridWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'gap',
})<GridWrapperProps>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: ${(props) => props.gap}px;
`;

export default GridWrapper;
