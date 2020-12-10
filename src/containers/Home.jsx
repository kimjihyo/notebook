import React from 'react';
import styled from 'styled-components';
import { SideActionBar, SideNavigationBar, Header } from '../components';
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

const Home = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  React.useEffect(() => {
    window.addEventListener('resize', () => { setWidth(window.innerWidth); });
  }, [setWidth]);

  return (
    <Container row={width > breakpoint}>
      {
        width > breakpoint ? (
          <>
            <SideActionBar />
            <SideNavigationBar />
          </>
        ) : <Header />
      }
      <Content withSidebars={width > breakpoint}>
        <Story />
      </Content>
    </Container>
  );
};

export default Home;
