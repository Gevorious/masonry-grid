import styled from 'styled-components';

export const CardFooter = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -100%;
  font-size: 14px;
  padding: 12px;
  background-color: rgba(50, 54, 63, 0.9);
  color: white;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  transition:
    bottom 0.3s ease,
    opacity 0.3s ease;
  opacity: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 12px 12px 52px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  overflow: hidden;
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);
  width: fit-content;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    transform: rotate(-1.4deg);
    transition: transform 0.2s ease;
    &:hover {
      transform: rotate(0deg) scale(1.01);
    }
  }

  &:hover {
    & ${CardFooter} {
      bottom: 0;
      opacity: 0.9;
    }
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  margin-bottom: 12px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
`;
