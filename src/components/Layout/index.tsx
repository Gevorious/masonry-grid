import styled from 'styled-components';
import { LayoutProps } from './types';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 16px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageWrapper>
      {/* Header will go here later */}
      <MainContent>{children}</MainContent>
      {/* Footer will go here later */}
    </PageWrapper>
  );
};

export default Layout;
