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
