import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuItem from '../../MenuItem/MenuItem';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DMItem from '../../DMItem/DMItem';

function ChannelSidebar() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel: any) => (even: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ChannelSidebarContainer>
      <ChannelHeaderContainer>
        <HeaderContent>
          <WorskpaceInfo>
            <h4>Workspace Name</h4>
            <span>
              <KeyboardArrowDownIcon fontSize='small' />
            </span>
          </WorskpaceInfo>
          <EditContainer>
            <BorderColorIcon />
          </EditContainer>
        </HeaderContent>
      </ChannelHeaderContainer>
      <MenuInfoContainer>
        <MenuItem Icon={InsertCommentIcon} title={'Threads'} />
        <MenuItem Icon={AlternateEmailIcon} title={'Mentions & reactions'} />
        <MenuItem Icon={ConnectWithoutContactIcon} title={'Slack connect'} />
        <MenuItem Icon={MoreVertIcon} title={'More'} />
      </MenuInfoContainer>
      <ChannelsContainer>
        <Title>
          {' '}
          <ArrowDropDownIcon fontSize='small' />
          <h4>Channels</h4>
        </Title>
        <MenuItem title={'Channel 1'} />
        <MenuItem title={'Channel 2'} />
        <MenuItem title={'Channel 3'} />
        <AddContainer>
          <AddIconContainer>
            <AddIcon />
          </AddIconContainer>
          <h4>Add channels</h4>
        </AddContainer>
      </ChannelsContainer>
      <ChannelsContainer>
        <Title>
          {' '}
          <ArrowDropDownIcon fontSize='small' />
          <h4>Direct messages</h4>
        </Title>
        <DMItem />
        <DMItem />
        <DMItem />
        <AddContainer>
          <AddIconContainer>
            <AddIcon />
          </AddIconContainer>
          <h4>Add teammates</h4>
        </AddContainer>
      </ChannelsContainer>
    </ChannelSidebarContainer>
  );
}

export default ChannelSidebar;

const ChannelSidebarContainer = styled.div`
  height: 100%;
  color: white;
  .MuiSvgIcon-root {
    color: #fff;
  }
`;

const ChannelHeaderContainer = styled.div`
  border-bottom: 1px solid #35373b;
  padding: 1em;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WorskpaceInfo = styled.div`
  display: flex;

  > h4 {
    font-size: 0.9em;
  }

  > span > .MuiSvgIcon-root {
    font-size: 0.9em;
  }
`;

const EditContainer = styled.div`
  background: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  .MuiSvgIcon-root {
    color: #363535;
    font-size: 0.85em;
  }
`;

const MenuInfoContainer = styled.div`
  color: white;
  padding-top: 1em;
  padding-left: 1em;
`;

const ChannelsContainer = styled.div`
  margin-top: 2em;
  padding-left: 1em;

  h4 {
    font-size: 0.8em;
  }
`;

const Title = styled.div`
  display: flex;
  column-gap: 1em;
  align-items: center;
  cursor: pointer;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  cursor: pointer;
  margin-top: 1em;

  h4 {
    font-size: 0.75em;
    font-weight: 400;
  }
`;

const AddIconContainer = styled.div`
  color: grey;
  background: #292a2c7f;
  border-radius: 6px;
  padding: 0.3em;

  .MuiSvgIcon-root {
    font-size: 0.7em;
  }
`;
