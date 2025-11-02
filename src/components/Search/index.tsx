import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { SearchProps } from './types';
import { debounce } from '../../utils/debounce';

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 12px;
  border: 2px solid transparent;
  background: #ffffff;
  font-size: 16px;
  transition: 0.2s;
  outline: none;

  &:focus {
    border-color: #3a86ff;
    box-shadow: 0 4px 15px rgba(58, 134, 255, 0.25);
  }

  &::placeholder {
    color: #888;
  }
`;

const Icon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
`;

const Search = ({
  placeholder = 'Search...',
  onSearch,
  delay = 400,
}: SearchProps) => {
  const handleSearch = debounce(onSearch, delay);

  return (
    <Wrapper>
      <Icon />
      <Input
        name="search-input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Wrapper>
  );
};

export default Search;
