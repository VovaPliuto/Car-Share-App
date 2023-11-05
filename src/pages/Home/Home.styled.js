import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainText = styled.h1`
  font-family: 'Manrope', sans-serif;
  margin: 50px auto;
  text-align: center;
  max-width: 550px;

  background-image: url('../../data/sharcar.jpg');
  background-size: cover;
`;

const HeaderSpan = styled.span`
  color: #3470ff;
  display: inline-block;
  margin-top: 25px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: underline;
  color: #0b44cd;

  &:hover,
  &:focus,
  &:active {
    color: #121417;
  }
`;

export { MainText, HeaderSpan, StyledLink };
