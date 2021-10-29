import styled from '@emotion/styled';
import React from 'react';
import AvatarProfile from '../AvatarProfile/AvatarProfile';

function MessageItem({ username, avatar, time, text }: any) {
  return (
    <MessageContainer>
      <AvatarProfile src={avatar} />
      <MessageContent>
        <HeaderContent>
          <h4>{username}</h4>
          <h6> {time}</h6>
        </HeaderContent>
        <TextContainer>{text}</TextContainer>
      </MessageContent>
    </MessageContainer>
  );
}

export default MessageItem;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-block: 1em;
  color: #fff;
  column-gap: 2em;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin-right: 2em;
  }
  h6 {
    color: #ccc;
  }
`;

const TextContainer = styled.div`
  font-size: 0.85em;
`;
