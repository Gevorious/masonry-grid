import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DesktopSidebarWrapper = styled.aside`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }

  width: 16rem;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #32363f;
  box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.3);
  color: #e5e7eb;
  z-index: 20;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Nav = styled.nav`
  flex: 1;
  padding: 1rem;
  margin-top: 2rem;
  overflow-y: auto;

  & > * + * {
    margin-top: 0.25rem;
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  color: #d1d5db;
  transition:
    background 0.2s,
    color 0.2s;
  text-decoration: none;

  &:hover {
    background: #1f2937;
    color: #fff;
  }

  svg {
    color: #9ca3af;
  }
`;

export const RecentSection = styled.div`
  margin-top: 1.5rem;
  margin-left: 0.5rem;
`;
export const RecentContent = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const RecentTitle = styled.h4`
  color: #9ca3af;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid #374151;
  font-size: 0.875rem;
  color: #6b7280;
`;
