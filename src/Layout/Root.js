import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import CollapseButton from './CollapseButton';
import SidebarHover from './SidebarHover';
import Color from '../constant/Color';

const Root = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <SidebarHoverWrapper style={isCollapsed ? {} : { display: 'block' }}>
        <SidebarHover setIsCollapsed={setIsCollapsed} />
      </SidebarHoverWrapper>
      <CollapseWrapper>
        <CollapseButton setIsCollapsed={setIsCollapsed} />
      </CollapseWrapper>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

// width of the sidebar
// background color
// scrolling behavior
const SidebarWrapper = styled.div`
  width: 20rem; // 320px (1 rem = 16px)
  background-color: ${Color.secondaryBackground};
  border-right: 1px solid ${Color.borderColor};
  height: 100vh; // full height of the viewport
  overflow-y: auto; // allows vertical scrolling

  // common breakpoints: 576px, 768px, 992px, 1200px
  @media (max-width: 992px) {
    display: none;
  }
`;

const PageWrapper = styled.div`
  width: calc(100vw - 20rem);
  height: 100vh; // full height of the viewport
  overflow-y: auto; // allows vertical scrolling
  padding: 4rem; // 64px

  @media (max-width: 992px) {
    width: calc(100vw - 2rem);
    padding: 2rem; // 32px
  }
`;

const CollapseWrapper = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
    width: 2rem; // 32px
    height: 2rem; // 32px
  }
`;

const SidebarHoverWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  width: 20rem; // 320px (1 rem = 16px)
  background-color: ${Color.secondaryBackground};
  border-right: 1px solid ${Color.borderColor};
  height: 100vh; // full height of the viewport
  overflow-y: auto; // allows vertical scrolling
`;

export default Root;
