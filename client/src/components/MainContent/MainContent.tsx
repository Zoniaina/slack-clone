import styled from '@emotion/styled';
import MessageInput from '../MessageInput/MessageInput';
import MessageItem from '../MessageItem/MessageItem';
import DateSeparator from '../Separtor/DateSeparator';

function MainContent(props: any) {
  return (
    <MainContainer>
      <ChannelHeader>
        <h4># Channel name</h4>
      </ChannelHeader>
      <MessagesContainer>
        <DateSeparator date={new Date()} />
        <MessageItem
          username={'zo'}
          time={'12:45 PM'}
          text={'Hello les dev!'}
        />
        <MessageItem
          username={'niaina'}
          time={'12:55 PM'}
          text={'Hello @Zou!'}
        />
        <MessageItem
          username={'eric'}
          time={'12:45 PM'}
          text={'Tu peux pusher les fix'}
        />
        <DateSeparator date={new Date()} />
        <MessageItem username={'zo'} time={'15:45 PM'} text={'Merge déployé'} />
        <MessageItem username={'zo'} time={'15:45 PM'} text={'Nouveau PR 👨🏻‍💻'} />
        <DateSeparator date={new Date()} />
        <MessageItem
          username={'john doe'}
          time={'15:45 PM'}
          text={'good ! 🚀'}
        />
        <MessageItem
          username={'eric'}
          time={'12:45 PM'}
          text={'Tu peux pusher les fix'}
        />
        <DateSeparator date={new Date()} />
        <MessageItem username={'zo'} time={'15:45 PM'} text={'Merge déployé'} />
        <MessageItem username={'zo'} time={'15:45 PM'} text={'Nouveau PR 👨🏻‍💻'} />
        <DateSeparator date={new Date()} />
        <MessageItem
          username={'john doe'}
          time={'15:45 PM'}
          text={'good ! 🚀'}
        />
      </MessagesContainer>
      <InputContainer>
        <MessageInput username={'eric'} time={'15:55 PM'} text={'good ! 🚀'} />
      </InputContainer>
    </MainContainer>
  );
}

export default MainContent;

const MainContainer = styled.div`
  background: #222529;
  height: 100%;
  border-left: 1px solid #35373b;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 2rem 8fr 2fr;
  padding: 1em;
  overflow-y: auto;
`;

const ChannelHeader = styled.div`
  border-bottom: 1px solid #35373b;
  h4 {
    color: #fff;
    font-size: 0.9em;
    font-weight: 600;
  }
`;

const MessagesContainer = styled.div`
  overflow: auto;
`;
const InputContainer = styled.div`
  position: absolute;
  bottom: 3em;
  width: 100%;
`;
