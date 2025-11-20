import styled from 'styled-components';

const BackButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  font-weight: 600;
  color: #616161;
  letter-spacing: 1px;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #000000;
  }
`;

export default BackButton;
