import React from 'react';
import { useSelector } from 'react-redux';
import { selectCarInfo } from 'redux/selectors';

import {
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
} from './CarInfo.styled';
import { ModelText, Divider } from 'components/CarsItem/CarsItem.styled';

const CarInfo = () => {
  const {
    id,
    img,
    make,
    model,
    address,
    year,
    type,
    mileage,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    rentalPrice,
  } = useSelector(selectCarInfo);

  const splittedAddress = address.split(',');
  const city = splittedAddress[1].trim();
  const country = splittedAddress[2].trim();
  const rentalArray = rentalConditions.split('\n');
  const age = rentalArray[0].split(' ')[2];
  const license = rentalArray[1];
  const security = rentalArray[2];

  return (
    <>
      <ModalImg
        // src="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        src={img}
        alt={make}
      />
      <CardHeader>
        <span>{make}</span> <ModelText>{model}</ModelText>
        {', '}
        <span>{year}</span>
      </CardHeader>
      <Text>
        {city} <Divider>|</Divider> {country} <Divider>|</Divider> Id: {id}{' '}
        <Divider>|</Divider> {type}{' '}
      </Text>
      <Text>
        Fuel consumption: {fuelConsumption} <Divider>|</Divider> Engine size:{' '}
        {engineSize}
      </Text>
      <Description>{description}</Description>
      <CatTitle>Accessories and functionalities:</CatTitle>
      <Text>{accessories.join(' | ')}</Text>
      <Text>{functionalities.join(' | ')}</Text>
      <CondTitle>Rental Conditions: </CondTitle>
      <RentalConditions>
        <CondItem>
          Minimum age : <StyledText>{age}</StyledText>
        </CondItem>
        <CondItem>{license}</CondItem>
        <CondItem>{security}</CondItem>
        <CondItem>
          Mileage: <StyledText>{mileage.toLocaleString('en-US')}</StyledText>
        </CondItem>
        <CondItem>
          Price: <StyledText>{rentalPrice}</StyledText>
        </CondItem>
      </RentalConditions>
      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
    </>
  );
};

export default CarInfo;
