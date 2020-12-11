import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/arrow_back-24px.svg';
import { ReactComponent as SearchIcon } from '../assets/search-24px.svg';
import Avatar from './Avatar';
import { colors } from '../constants';

const Wrapper = styled.div`
  padding: 30px 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ActionRow = styled.div`
  display: flex;
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
  flex: 1;
  display: flex;
  align-items: center;
  padding: 8px 6px;
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
`;

const ItemText = styled.div`
  color: ${colors.textPrimary};
  font-size: 14px;
  margin-left: 14px;
  font-weight: ${(props) => (props.bold ? 600 : 400)};
`;

const CreateDrawer = ({ onBackClick }) => {
  const searchInputPlaceholder = 'Search for respositories, code and more...';
  const iconSize = 22;

  return (
    <Wrapper>
      <ActionRow>
        <BackButton onClick={onBackClick}>
          <BackIcon fill={colors.textSecondary} width={24} height={24} />
        </BackButton>
        <Item>
          <Avatar />
          <ItemText bold>Ji-Hyo Kim</ItemText>
        </Item>
      </ActionRow>
      <SearchResultSecion>
        <ItemGroup>
          <ItemGroupTitle>
            Create
          </ItemGroupTitle>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText><b>Repository</b></ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText><b>Workspace</b></ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText><b>Project</b></ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText><b>Snippet</b></ItemText>
          </Item>
        </ItemGroup>
        <ItemGroup>
          <ItemGroupTitle>
            Import
          </ItemGroupTitle>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText><b>Repository</b></ItemText>
          </Item>
        </ItemGroup>
        <ItemGroup>
          <ItemGroupTitle>
            Get to work
          </ItemGroupTitle>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText>
              <b>Clone</b>
              {' '}
              this repository
            </ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText>
              Create a
              {' '}
              <b>branch</b>
            </ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText>
              Create a
              {' '}
              <b>pull request</b>
            </ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText>
              <b>Compare</b>
              {' '}
              branches or tags
            </ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <SearchIcon fill={colors.white} width={iconSize} height={iconSize} />
            </ItemIcon>
            <ItemText>
              <b>Fork</b>
              {' '}
              this repository
            </ItemText>
          </Item>
        </ItemGroup>
      </SearchResultSecion>
    </Wrapper>
  );
};

CreateDrawer.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

export default CreateDrawer;
