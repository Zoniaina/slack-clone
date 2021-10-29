import styled from '@emotion/styled';
import ChannelSidebar from './ChannelSidebar/ChannelSidebar';
import WorkspaceSidebar from './WorkspaceSidebar/WorkspaceSidebar';

function Sidebar() {
  return (
    <SidebarContainer>
      <WorkspaceSidebar />
      <ChannelSidebar />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  height: 100%;
  background-color: #19171d;
  display: grid;
  grid-template-columns: 1fr 6fr;
`;
