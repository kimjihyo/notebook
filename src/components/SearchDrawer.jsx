import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../assets/arrow_back-24px.svg';
import { colors } from '../constants';

const Wrapper = styled.div`
  padding: 24px 12px;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  margin-right: 4px;

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
  border-bottom: 2px solid ${colors.primaryLight};
  padding: 5px 3px;
`;

const SearchDrawer = ({ onBackClick }) => {
  const searchInputPlaceholder = 'Search for respositories, code and more...';
  return (
    <Wrapper>
      <ActionRow>
        <BackButton onClick={onBackClick}>
          <BackIcon fill={colors.textSecondary} />
        </BackButton>
        <SearchInput placeholder={searchInputPlaceholder} />
      </ActionRow>
    </Wrapper>
  );
};

SearchDrawer.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

export default SearchDrawer;
