import styled from '@emotion/styled';
import React from 'react';
import WorkspaceItem from '../../Workspace/WorkspaceItem';
import AddIcon from '@mui/icons-material/Add';
function WorkspaceSidebar() {
  return (
    <WorkspaceSidebarContainer>
      {[1, 2, 3].map((item, index) => (
        <WorkspaceItem key={index} />
      ))}
      <AddContainer>
        <AddIcon fontSize='small' />
      </AddContainer>
    </WorkspaceSidebarContainer>
  );
}

export default WorkspaceSidebar;

const WorkspaceSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  height: 100%;
  border-right: 1px solid #35373b;
  row-gap: 1em;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  padding: 0.4em;

  :hover {
    background: rgb(41, 42, 44, 0.5);
    border-radius: 0.4em;
  }
`;
