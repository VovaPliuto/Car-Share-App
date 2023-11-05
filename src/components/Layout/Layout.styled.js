import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: #3470ff;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  width: 1440px;
  padding: 30px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

const Container = styled.div`
  width: 1184px;
  margin: 0 auto;
  padding: 40px 129px;
`;

export { StyledLink, Header, Nav, NavWrapper, Container };
