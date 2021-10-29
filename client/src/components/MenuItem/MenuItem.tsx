import styled from '@emotion/styled';

function MenuItem({ Icon, title, addOption }: any) {
  return (
    <MenuItemOption>
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <MenuItemChannel>
          <span>#</span> <h3>{title}</h3>
        </MenuItemChannel>
      )}
    </MenuItemOption>
  );
}

export default MenuItem;

const MenuItemOption = styled.div`
  display: flex;
  font-size: 0.65em;
  align-items: center;
  padding: 0.65em;
  cursor: pointer;
  column-gap: 1em;

  .MuiSvgIcon-root {
    color: white;
    font-size: 1.5em;
  }

  :hover {
    background: rgb(41, 42, 44, 0.5);
  }

  > h3 {
    font-weight: 400;
  }

  > h3 > span {
    padding: 15px;
  }
`;
const MenuItemChannel = styled.div`
  margin-left: 1.5em;
  display: flex;
  column-gap: 1em;
`;
