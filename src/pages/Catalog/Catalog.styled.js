import { styled } from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 100px auto 0 auto;
  background-color: transparent;
  border: none;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-decoration: underline;
  color: #3470ff;

  &:hover,
  &:focus,
  &:active {
    color: #0b44cd;
  }
`;

export { Button };
