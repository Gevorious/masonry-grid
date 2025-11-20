import { useState } from 'react';
import styled from 'styled-components';
import Content from './Content';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;

  background-color: #1f2937;
  color: #e5e7eb;

  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;

  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const InnerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const ToggleButton = styled.button<{ $open: boolean }>`
  position: absolute;
  top: 0.25rem;
  right: ${({ $open }) => ($open ? '0.75rem' : '-2.5rem')};
  padding: 0.5rem;
  z-index: 11;
  cursor: pointer;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar $open={isOpen}>
        <InnerContent>
          <Content onLinkClick={() => setIsOpen(false)} />
        </InnerContent>

        <ToggleButton $open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes size={24} color="#ffffff" />
          ) : (
            <FaBars size={24} color="#111827" />
          )}
        </ToggleButton>
      </Sidebar>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default MobileSidebar;
