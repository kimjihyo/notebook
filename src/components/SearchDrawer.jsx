import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/arrow_back-24px.svg';
import { ReactComponent as SearchIcon } from '../assets/search-24px.svg';
import { colors } from '../constants';

const Wrapper = styled.div`
  padding: 30px 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  margin-bottom: 6px;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  margin-right: 6px;

  &:hover {
    background-color: ${colors.lightGray};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: 0px;
  font-size: 1.2em;
  background-color: transparent;
  color: ${colors.textSecondary};
  outline: none;
  margin-left: 0px;
  border-bottom: 2px solid rgb(38, 132, 255);
  padding: 5px 3px;
`;

const SearchResultSecion = styled.div`
  flex: 1;
  margin-left: 40px;
  margin-top: 16px;
`;

const ItemGroupTitle = styled.div`
  line-height: 1.14286;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.textLight};
  margin-bottom: 6px;
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  margin:0px 6px;
  border-radius: 5px;
  &:hover {
    background-color: ${colors.grayHover};
    cursor: pointer;
  }
`;

const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  background-color: ${colors.textLight};
  border-radius: 50%;
  margin-right: 12px;
`;

const ItemText = styled.div`
  color: ${colors.textSecondary};
  font-size: 14px;
`;

const SearchDrawer = ({ onBackClick }) => {
  const searchInputPlaceholder = 'Search for respositories, code and more...';
  return (
    <Wrapper>
      <ActionRow>
        <BackButton onClick={onBackClick}>
          <BackIcon fill={colors.textSecondary} width={24} height={24} />
        </BackButton>
        <SearchInput placeholder={searchInputPlaceholder} />
      </ActionRow>
      <SearchResultSecion>
        <ItemGroup>
          <ItemGroupTitle>
            Code
          </ItemGroupTitle>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={22} height={22} />
            </ItemIcon>
            <ItemText>Search for code in base-go</ItemText>
          </Item>
        </ItemGroup>
        <ItemGroup>
          <ItemGroupTitle>
            Repositories
          </ItemGroupTitle>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={22} height={22} />
            </ItemIcon>
            <ItemText>View all repositories</ItemText>
          </Item>
        </ItemGroup>
      </SearchResultSecion>
    </Wrapper>
  );
};

SearchDrawer.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

export default SearchDrawer;
