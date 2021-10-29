import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Badge } from '@mui/material';
import styled from '@emotion/styled';

function AvatarProfile(props: any) {
  const { connectedStatus, statusIndex, src, badgeVisible, style } = props;

  return (
    <Badge
      color='success'
      overlap='circular'
      badgeContent=' '
      variant='dot'
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      invisible={badgeVisible}
    >
      <ProfileContainer style={style}>
        <AvatarContainer></AvatarContainer>
      </ProfileContainer>
    </Badge>
  );
}

export default AvatarProfile;

const ProfileContainer = styled(Avatar)`
  border-radius: 0.5em;
  width: 32px;
  height: 32px;
`;

const AvatarContainer = styled(Avatar)`
  border-radius: 0.2em;
  object-fit: contain;
`;
