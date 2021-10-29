import MenuIcon from '@mui/icons-material/Menu';
import AvatarProfile from '../AvatarProfile/AvatarProfile';
import tempAvatar from '../../assets/images/icon_slack.png';
import styled from '@emotion/styled';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();
  return (
    <HeaderContainer>
      <MenuContainer>
        <MenuIcon fontSize='small' />
      </MenuContainer>
      <SearchContainer>
        <NavigationContainer>
          <ArrowBackIcon fontSize='small' onClick={() => history.goBack()} />
          <ArrowForwardIcon fontSize='small' />
        </NavigationContainer>
        <AccessTimeIcon fontSize='small' />
        <InputSearchContainer>
          <input placeholder='Search ...' />
          <SearchIcon fontSize='small' />
        </InputSearchContainer>
        <HelpOutlineIcon fontSize='small' style={{ marginLeft: '6em' }} />
      </SearchContainer>
      <ProfileContainer>
        <AvatarProfile src={tempAvatar} badgeVisible={false} />
      </ProfileContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  height: 3em;
  background: #201f22;
  width: 100%;
  border-bottom: 1px solid #35373b;
  color: #fff;
  padding-inline: 2em;

  .MuiSvgIcon-root {
    cursor: pointer;
  }
  .MuiSvgIcon-root:hover {
    opacity: 0.8;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
`;

const InputSearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
  padding-inline: 1.5em;
  border-radius: 0.4em;
  > input {
    background: transparent;
    outline: none;
    border: none;
    color: #fff;
    padding: 0.5em;
    flex: 1;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  column-gap: 1em;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;
