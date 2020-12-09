import React from 'react';
import styled from 'styled-components';
import { SideActionBar, SideNavigationBar } from '../components';
import { sizes } from '../constants';
import Story from './Story';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  margin-left: ${sizes.sideNavigationBarWidth + sizes.sideActionBarWidth}px;
`;

const Home = () => (
  <Container>
    <SideActionBar />
    <SideNavigationBar />
    <Content>
      <Story />
    </Content>
  </Container>
);

export default Home;
