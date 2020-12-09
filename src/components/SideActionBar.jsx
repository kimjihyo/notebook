import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../constants';
import { ReactComponent as SearchIcon } from '../assets/search-24px.svg';
import { ReactComponent as AddIcon } from '../assets/add-black-18dp.svg';
import { ReactComponent as HelpIcon } from '../assets/help-24px.svg';

const Wrapper = styled.div`
  position: fixed;
  background-color: ${colors.primary};
  width: ${sizes.sideActionBarWidth}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const IconButton = styled.div`
  padding: 4px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #ffffff20;
  }
`;

const TopButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const BottomButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const SideActionBar = () => (
  <Wrapper>
    <TopButtonsContainer>
      <IconButton>
        <SearchIcon fill="white" width="30px" height="30px" />
      </IconButton>
      <IconButton>
        <AddIcon fill="white" width="32px" height="32px" />
      </IconButton>
    </TopButtonsContainer>
    <BottomButtonsContainer>
      <IconButton>
        <HelpIcon fill="white" />
      </IconButton>
    </BottomButtonsContainer>
  </Wrapper>
);

export default SideActionBar;
