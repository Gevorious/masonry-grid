import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;

  p {
    font-size: 1rem;
  }

  p strong {
    font-weight: 600;
  }
`;

export const Image = styled.img`
  max-height: 90vh;
  height: auto;
  width: auto;
  border-radius: 12px;
  object-fit: cover;
  align-self: center;
`;
