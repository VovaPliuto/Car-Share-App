import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { selectCarsIsLoading, selectFavoritesCars } from 'redux/selectors';

import { fetchCar } from 'redux/cars/operations';

import { CarsList } from 'components/CarsList/CarsList';
import Modal from 'components/Modal/Modal';
import CarInfo from 'components/CarInfo/CarInfo';

const Favorite = () => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavoritesCars);
  const isLoading = useSelector(selectCarsIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback(
    id => {
      dispatch(fetchCar(id));
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    },
    [dispatch, setIsModalOpen]
  );

  const onModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {favoritesCars.length > 0 ? (
        <CarsList onOpenModal={onOpenModal} cars={favoritesCars} />
      ) : (
        <p>You don't have any choosen favorite car</p>
      )}

      {isModalOpen && !isLoading && (
        <Modal onModalClose={onModalClose}>
          <CarInfo />
        </Modal>
      )}
    </>
  );
};

export default Favorite;
