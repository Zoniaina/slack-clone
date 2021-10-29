import styled from '@emotion/styled';
import { Avatar, Badge } from '@mui/material';
import tempLogo from '../../assets/images/icon_slack.png';

function WorkspaceItem() {
  return (
    <WorkspaceItemContainer>
      <Badge
        color='default'
        overlap='circular'
        badgeContent=' '
        variant='dot'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        invisible={false}
      >
        <ProfileContainer>
          <AvatarContainer src={tempLogo}></AvatarContainer>
        </ProfileContainer>
      </Badge>
    </WorkspaceItemContainer>
  );
}

export default WorkspaceItem;

const WorkspaceItemContainer = styled.div`
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  border-radius: 0.5em;
  width: 40px;
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarContainer = styled(Avatar)`
  border-radius: 0.2em;
  object-fit: contain;
`;
