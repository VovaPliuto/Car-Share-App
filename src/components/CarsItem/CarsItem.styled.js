import { styled } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const StyledCarsItem = styled.li`
  position: relative;
  width: 274px;
`;

const CarImage = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #ffffffcc;
  cursor: pointer;
`;

const HeartIconFilled = styled(AiFillHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #ffffffcc;
  cursor: pointer;
  color: #3470ff;
`;

const CardHeader = styled.h2`
  font-family: 'Manrope', sans-serif;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #121417;
`;

const ModelText = styled.span`
  color: #3470ff;
`;

const CarPrice = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #121417;
`;

const CardHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 14px;
  margin-bottom: 8px;
  padding-right: 14px;
`;

const CardText = styled.p`
  font-family: 'Manrope', sans-serif;
  width: 270px;
  height: 40px;
  margin-bottom: 28px;
  overflow: hidden;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #12141780;
`;

const Divider = styled.span`
  color: #1214171a;
`;

const CardBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  border-radius: 12px;
  background-color: #3470ff;
  outline: none;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  color: #ffffff;

  &:hover,
  &:focus,
  &:active {
    background-color: #0b44cd;
  }
`;

export {
  StyledCarsItem,
  CarImage,
  HeartIcon,
  HeartIconFilled,
  CardHeader,
  ModelText,
  CarPrice,
  CardHeaderWrap,
  CardText,
  Divider,
  CardBtn,
};
