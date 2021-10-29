import styled from '@emotion/styled';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import StrikethroughSOutlinedIcon from '@mui/icons-material/StrikethroughSOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LinkIcon from '@mui/icons-material/Link';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

function MessageInput(props: any) {
  const { channel } = props;

  return (
    <MessageInputContainer>
      <textarea placeholder={`Send a message to #${channel || 'channel'}`} />
      <ToolsContainer>
        <FormatterTools>
          <QuickAction>
            <FlashOnOutlinedIcon fontSize='small' />
          </QuickAction>
          <FormatBoldOutlinedIcon fontSize='small' />
          <FormatItalicOutlinedIcon fontSize='small' />
          <StrikethroughSOutlinedIcon fontSize='small' />
          <CodeOutlinedIcon fontSize='small' />
          <LinkIcon fontSize='small' />
          <FormatListBulletedIcon fontSize='small' />
          <FormatListNumberedIcon fontSize='small' />
          <FormatAlignLeftIcon fontSize='small' />
        </FormatterTools>

        <ActionTools>
          <FormatColorTextIcon fontSize='small' />
          <AlternateEmailIcon fontSize='small' />
          <SentimentSatisfiedRoundedIcon fontSize='small' />
          <AttachFileIcon fontSize='small' />
          <SendIcon fontSize='small' />
        </ActionTools>
      </ToolsContainer>
    </MessageInputContainer>
  );
}

export default MessageInput;

const MessageInputContainer = styled.div`
  border: 1px solid rgba(108, 109, 109, 0.658);
  border-radius: 0.25em;
  margin: 1em;

  > textarea {
    font-family: inherit;
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: #fff;
    padding: 0.5em;
    padding-top: 0.85em;
    resize: none;
  }

  > textarea:active {
  }

  .MuiSvgIcon-root {
    color: #fff;
    cursor: pointer;
  }
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid rgba(108, 109, 109, 0.658); */
  padding: 0.5em;
`;

const FormatterTools = styled.div`
  display: flex;
  column-gap: 0.7em;
`;

const QuickAction = styled.div`
  border-right: 1px solid rgba(108, 109, 109, 0.658);
  padding-right: 0.5em;
`;

const ActionTools = styled.div`
  display: flex;
  column-gap: 0.7em;
`;
