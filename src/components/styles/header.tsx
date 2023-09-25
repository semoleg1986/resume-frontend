import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { ROOT_PAGE } from '../../router';

const PrimaryHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: rgba(22 22 22/90%);
  backdrop-filter: blur(20px);
`;

const Container = styled.nav`
  max-width: 120rem;
  margin-inline: auto;
  padding-inline: 1.5 reg;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  transition: height 0.25s;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin-right: 3rem;
  /* margin-right: auto; */
  color: white;
  /* &:hover {
    color: #d3d3d3;
  } */
`;

const StyledListItem = styled.li`
  transition: color 0.25s;
`;

const NavItem = styled(NavLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 4px;
    scale: 0 1;
    transform-origin: left;
    transition: scale 0.75s;
  }
  &:hover::before {
    scale: 1;
  }
`;

const Logo = styled(Link)`
  margin-left: 1em;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 900;
  color: white;

`;

function Header() {
  return (
    <PrimaryHeader>
      <Container>
        <Logo to={ROOT_PAGE}>oak:it</Logo>
        <StyledList>
          <StyledListItem>
            <NavItem to={ROOT_PAGE}>About me</NavItem>
          </StyledListItem>
          <StyledListItem>
            <NavItem to={ROOT_PAGE}>Item 1</NavItem>
          </StyledListItem>
          <StyledListItem>
            <NavItem to={ROOT_PAGE}>Item 1</NavItem>
          </StyledListItem>
        </StyledList>
      </Container>
    </PrimaryHeader>
  );
}

export default Header;
