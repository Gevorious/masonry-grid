import styled from 'styled-components';
import { ErrorFallbackProps } from './types';

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 0 20px;
  text-align: center;

  color: #444;
  background: #f9f9f9;
  border-radius: 8px;

  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 1rem;
  max-width: 400px;
  opacity: 0.8;
`;

const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: #111;
  color: #fff;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.3px;

  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
  return (
    <Wrapper>
      <Title>Something went wrong 😢</Title>
      <Message>{error.message}</Message>
      <RetryButton onClick={onRetry}>Try Again</RetryButton>
    </Wrapper>
  );
};

export default ErrorFallback;
