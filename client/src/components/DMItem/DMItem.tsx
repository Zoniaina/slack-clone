import styled from '@emotion/styled';
import React from 'react';
import AvatarProfile from '../AvatarProfile/AvatarProfile';

function DMItem({ username, isMe, avatar }: any) {
  return (
    <DMContainer>
      <AvatarProfile
        style={{ width: '0.8em', height: '0.8em', borderRadius: '0.2em' }}
      />
      <h4>{'username'}</h4>
    </DMContainer>
  );
}

export default DMItem;

const DMContainer = styled.div`
  margin-left: 1.5em;
  cursor: pointer;
  display: flex;
  column-gap: 1em;
  align-items: center;
  margin-top: 0.6em;

  h4 {
    font-size: 0.85em;
    font-weight: 400;
  }
`;
