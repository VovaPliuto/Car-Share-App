import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addFavoriteCar,
  deleteFavoriteCar,
} from 'redux/favorites/favoritesSlice';
import { selectCars, selectFavoritesCars } from 'redux/selectors';

import {
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
} from './CarsItem.styled';

const CarsItem = ({ onOpenModal, car }) => {
  const {
    id,
    make,
    model,
    img,
    description,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

  const dispatch = useDispatch();
  const displayedCars = useSelector(selectCars);
  const favoritesCars = useSelector(selectFavoritesCars);

  const splittedAddress = address.split(',');
  const city = splittedAddress[1].trim();
  const country = splittedAddress[2].trim();

  const handleFavoriteClick = id => {
    const choosenCar = displayedCars.find(el => el.id === id);
    const carToDelete = favoritesCars.find(el => el.id === id);

    if (carToDelete) {
      dispatch(deleteFavoriteCar(choosenCar));
    } else {
      dispatch(addFavoriteCar(choosenCar));
    }
  };

  return (
    <StyledCarsItem>
      {favoritesCars.find(el => el.id === id) ? (
        <HeartIconFilled onClick={() => handleFavoriteClick(id)} />
      ) : (
        <HeartIcon onClick={() => handleFavoriteClick(id)} />
      )}

      <CarImage
        // src="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        src={img}
        alt={description}
      />
      <CardHeaderWrap>
        <CardHeader>
          <span>{make}</span> <ModelText>{model}</ModelText>
          {', '}
          <span>{year}</span>
        </CardHeader>
        <CarPrice>{rentalPrice}</CarPrice>
      </CardHeaderWrap>
      <CardText>
        {city} <Divider>|</Divider> {country} <Divider>|</Divider>{' '}
        {rentalCompany} <br />
        {type} <Divider>|</Divider> {model} <Divider>|</Divider> {mileage}{' '}
        <Divider>|</Divider> {functionalities[0]}
      </CardText>
      <CardBtn type="button" onClick={() => onOpenModal(id)}>
        Learn more
      </CardBtn>
    </StyledCarsItem>
  );
};

CarsItem.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarsItem;
