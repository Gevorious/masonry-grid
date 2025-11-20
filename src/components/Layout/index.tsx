import styled from 'styled-components';
import { LayoutProps } from './types';
import { DesktopSidebar, MobileSidebar } from '../Sidebar';

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Outlet = styled.main`
  flex: 1;
  padding: 16px;
  width: 100%;
  @media (min-width: 767px) {
    margin-left: 16rem;
  }
`;

const OutletContent = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageWrapper>
      <DesktopSidebar />
      <MobileSidebar />
      <Outlet>
        <OutletContent>{children}</OutletContent>
      </Outlet>
    </PageWrapper>
  );
};

export default Layout;
