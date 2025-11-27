import styled from 'styled-components';

export const Wrapper = styled.div.attrs<{ $ratio: string }>((props) => ({
  style: {
    aspectRatio: props.$ratio,
  },
}))`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background: #eee;
  display: flex;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 6px 6px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.1),
      0 6px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
`;
