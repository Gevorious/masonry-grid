import styled from 'styled-components';

export const StyledImg = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 5px;
  object-fit: cover;
  display: block;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 0 10px rgba(109, 170, 206, 0.7),
      0 0 6px rgba(255, 255, 255, 0.3);
  }
`;
