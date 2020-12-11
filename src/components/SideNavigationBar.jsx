import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../constants';
import { ReactComponent as DescriptionIcon } from '../assets/description-black-18dp.svg';
import { ReactComponent as SubjectIcon } from '../assets/subject-black-18dp.svg';
import Avatar from './Avatar';

const Wrapper = styled.div`
  position: fixed;
  background-color: ${colors.lightGray};
  width: ${sizes.sideNavigationBarWidth}px;
  height: 100vh;
  border-right: 1px solid ${colors.border};
  margin-left: 65px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const HomeButton = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textSecondary};
  font-size: 15px;
  font-weight: bold;
  padding: 12px 9px;
  &:hover {
    background-color: ${colors.grayHover};
    cursor: pointer;
  }
`;

const TopButtonRow = styled.div`
  width: 100%;
  margin-bottom: 4px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 9px;
  color: ${colors.textSecondary};
  &:hover {
    background-color: ${colors.grayHover};
    cursor: pointer;
  }
`;

const ButtonTitle = styled.div`
  font-size: 15px;
  margin-left: 12px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideNavigationBar = () => (
  <Wrapper>
    <Content>
      <TopButtonRow>
        <HomeButton>
          <Avatar />
          <ButtonTitle>
            Ji-Hyo Kim
          </ButtonTitle>
        </HomeButton>
      </TopButtonRow>
      <ButtonsContainer>
        <Button>
          <Icon>
            <SubjectIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Jihyo
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Soyeon
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Canada
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Korea
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Friends
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Deployments
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Jira issues
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Wiki
          </ButtonTitle>
        </Button>
        <Button>
          <Icon>
            <DescriptionIcon fill={colors.textSecondary} />
          </Icon>
          <ButtonTitle>
            Downloads
          </ButtonTitle>
        </Button>
      </ButtonsContainer>
    </Content>
  </Wrapper>
);

export default SideNavigationBar;
