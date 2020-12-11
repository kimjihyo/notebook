import React from 'react';
import styled from 'styled-components';
import {
  SideActionBar, SideNavigationBar, Header, SearchDrawer, CreateDrawer,
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
  width: ${(props) => `${props.width}px`};
  height: 100vh;
  position: fixed;
  left: ${(props) => (props.drawerOpen ? '0px' : `-${sizes.searchDrawerWidth}px`)};
  top: 0px;
  z-index: ${(props) => props.priority};
  transition: left .2s;
`;

const Shadow = styled.div`
  display: ${(props) => (props.drawerOpen ? 'block' : 'none')};
  background-color: rgba(9, 30, 66, 0.54);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 400;
`;

const Home = () => {
  const [searchDrawerOpen, setSearchDrawerOpen] = React.useState(false);
  const [actionDrawerOpen, setActionDrawerOpen] = React.useState(false);
  const [createDrawerOpen, setCreateDrawerOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 950;

  React.useEffect(() => {
    window.addEventListener('resize', () => { setWidth(window.innerWidth); });
  }, [setWidth]);

  const onSearchClick = () => {
    setSearchDrawerOpen(true);
  };

  const onCreateClick = () => {
    setCreateDrawerOpen(true);
  };

  const onHamburgetButtonClick = () => {
    setActionDrawerOpen(true);
  };

  const dismissDrawer = () => {
    if (searchDrawerOpen) {
      setSearchDrawerOpen(false);
    } else if (actionDrawerOpen) {
      setActionDrawerOpen(false);
    } else if (createDrawerOpen) {
      setCreateDrawerOpen(false);
    }
  };

  return (
    <Container row={width > breakpoint}>
      {
        width > breakpoint ? (
          <>
            <SideActionBar onSearchClick={onSearchClick} onCreateClick={onCreateClick} />
            <SideNavigationBar />
          </>
        ) : <Header onHamburgerButtonClick={onHamburgetButtonClick} />
      }
      <Drawer priority={502} width={sizes.searchDrawerWidth} drawerOpen={searchDrawerOpen}>
        <SearchDrawer onBackClick={dismissDrawer} />
      </Drawer>
      <Drawer priority={502} width={sizes.createDrawerWidth} drawerOpen={createDrawerOpen}>
        <CreateDrawer onBackClick={dismissDrawer} />
      </Drawer>
      <Drawer
        priority={501}
        width={sizes.sideActionBarWidth + sizes.sideNavigationBarWidth}
        drawerOpen={actionDrawerOpen}
      >
        <SideActionBar onSearchClick={onSearchClick} />
        <SideNavigationBar />
      </Drawer>
      <Shadow
        drawerOpen={actionDrawerOpen || searchDrawerOpen || createDrawerOpen}
        onClick={dismissDrawer}
      />
      <Content withSidebars={width > breakpoint}>
        <Story />
      </Content>
    </Container>
  );
};

export default Home;
