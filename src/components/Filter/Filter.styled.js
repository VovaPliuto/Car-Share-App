import { styled } from 'styled-components';

const Form = styled.form`
  margin: 0 auto 50px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

const Label = styled.label`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;

  color: #8a8a89;
`;

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterInput = styled.select`
  display: flex;
  flex-direction: column;

  width: 224px;
  height: 48px;
  margin-top: 5px;
  padding: 14px 18px;
  border-radius: 14px;
  border: none;

  background-color: #f7f7fb;
  color: #121417;
`;

const Option = styled.option`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const Button = styled.button`
  display: inline-block;
  width: 136px;
  height: 48px;

  border-radius: 12px;
  border: none;
  outline: none;

  background-color: #3470ff;
  color: #ffffff;

  &:hover,
  &:active {
    background-color: #0b44cd;
  }
`;

export { Form, FilterInput, Label, Option, Button, FilterWrap };
