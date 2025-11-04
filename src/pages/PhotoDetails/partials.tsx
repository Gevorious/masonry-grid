import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #333;

  h2 {
    font-size: 1.2rem;
    margin: 16px 0;
  }

  p {
    font-size: 1rem;
  }

  p strong {
    font-weight: 600;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  align-self: center;
`;
