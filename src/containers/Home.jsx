import React from 'react';
import styled from 'styled-components';
import {
  SideActionBar, SideNavigationBar, Header, SearchDrawer,
} from '../components';
import { sizes } from '../constants';
import Story from './Story';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  margin-left: ${(props) => (props.withSidebars ? `${sizes.sideActionBarWidth + sizes.sideNavigationBarWidth}px` : '0px')};
`;

const Drawer = styled.div`
  background-color: white;
  width: 460px;
  height: 100vh;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 501;
`;

const Shadow = styled.div`
  background-color: rgba(9, 30, 66, 0.54);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 500;
`;

const Home = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  React.useEffect(() => {
    window.addEventListener('resize', () => { setWidth(window.innerWidth); });
  }, [setWidth]);

  const onSearchClick = () => {
    setDrawerOpen(true);
  };

  const dismissDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Container row={width > breakpoint}>
      {
        width > breakpoint ? (
          <>
            <SideActionBar onSearchClick={onSearchClick} />
            <SideNavigationBar />
          </>
        ) : <Header />
      }
      {drawerOpen && (<Drawer><SearchDrawer onBackClick={dismissDrawer} /></Drawer>)}
      {drawerOpen && (<Shadow onClick={dismissDrawer} />)}
      <Content withSidebars={width > breakpoint}>
        <Story />
      </Content>
    </Container>
  );
};

export default Home;
