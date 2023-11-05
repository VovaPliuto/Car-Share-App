import styled from 'styled-components';

const ModalImg = styled.img`
  display: block;
  width: 100%;
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  object-fit: cover;
`;

const CardHeader = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #121417;
  margin-bottom: 8px;
`;

const Text = styled.p`
  width: 100%;
  height: 18px;
  overflow: hidden;

  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #12141780;

  & + & {
    margin-top: 4px;
  }
`;

const Description = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #121417;

  margin-top: 14px;
  margin-bottom: 24px;
`;

const CatTitle = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;

  margin-bottom: 8px;
`;

const CondTitle = styled(CatTitle)`
  margin-top: 24px;
`;

const RentalConditions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

const CondItem = styled.p`
  padding: 7px 14px;
  border-radius: 35px;

  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #363535;

  background-color: #f9f9f9;
`;

const StyledText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #3470ff;
`;

const RentalLink = styled.a`
  display: block;
  max-width: 168px;
  max-height: 44px;
  margin-top: 24px;
  padding: 12px;

  background-color: #3470ff;
  border-radius: 12px;

  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #0b44cd;
  }
`;

export {
  ModalImg,
  CardHeader,
  Text,
  Description,
  CatTitle,
  CondTitle,
  RentalConditions,
  CondItem,
  StyledText,
  RentalLink,
};
