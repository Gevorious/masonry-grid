import { FaHome } from 'react-icons/fa';
import type { ContentProps } from './types';
import {
  Footer,
  Nav,
  RecentContent,
  RecentSection,
  RecentTitle,
  SidebarLink,
  Wrapper,
} from './styles';
import {
  useLoadRecentFromStorage,
  useRecentStore,
} from '../../store/useRecentStore';
import Thumbnail from '../Thumbnail';
import { Link } from 'react-router-dom';

const Content = ({ onLinkClick }: ContentProps) => {
  useLoadRecentFromStorage();
  const { recent } = useRecentStore();

  return (
    <Wrapper>
      <Nav>
        <SidebarLink to="/" onClick={onLinkClick}>
          <FaHome />
          <span>Home</span>
        </SidebarLink>
        <RecentSection>
          <RecentTitle>Recently Viewed</RecentTitle>
          <RecentContent>
            {recent.length > 0 &&
              recent.map(({ id, thumbnail }, i) => (
                <Link
                  key={`${id}_${i}`}
                  to={`/photo/${id}`}
                  onClick={onLinkClick}
                >
                  <Thumbnail src={thumbnail} size={80} />
                </Link>
              ))}
          </RecentContent>
        </RecentSection>
      </Nav>

      <Footer>© 2025</Footer>
    </Wrapper>
  );
};

export default Content;
