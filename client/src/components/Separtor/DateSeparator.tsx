import styled from '@emotion/styled';
import React from 'react';
import dayjs from 'dayjs';

function DateSeparator({ date }: any) {
  const formatDate = (date: Date) => dayjs(new Date()).format('dddd, MMMM DD');

  return (
    <SeparatorContainer>
      <DateContainer>{'Sunday, October 1st'}</DateContainer>
    </SeparatorContainer>
  );
}

export default DateSeparator;

const SeparatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #35373b;
  margin-bottom: 2em;
`;

const DateContainer = styled.div`
  width: 20em;
  border-radius: 50px;
  padding: 0.5em;
  border: 1px solid #35373b;
  text-align: center;
  color: #fff;
  font-size: 0.75em;
  font-weight: bolder;
  background: #222529;
  position: relative;
  bottom: -1.5em;
`;
