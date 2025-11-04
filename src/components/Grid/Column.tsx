import styled from 'styled-components';
import { ColumnProps } from './types';
import { memo } from 'react';

const Column = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'gap',
})<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
  flex: 1;
`;

export default memo(Column);
