import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { fetchAllCars, fetchCars, fetchCar } from 'redux/cars/operations';
import { filterCarsChange } from 'redux/filter/filtersSlice';
import {
  selectAllCars,
  selectCars,
  selectCarsIsLoading,
  selectCarsFilter,
} from 'redux/selectors';

import { CarsList } from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
import CarInfo from 'components/CarInfo/CarInfo';
import { Button } from './Catalog.styled';

const Catalogue = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const allCars = useSelector(selectAllCars);
  const filterValue = useSelector(selectCarsFilter);
  
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useSelector(selectCarsIsLoading);

  useEffect(() => {
    dispatch(filterCarsChange(''));
    dispatch(fetchAllCars());
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleLoMoBtnClick = () => {
    setPage(page + 1);
  };

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
        <title>Catalog</title>
      </Helmet>

      <Filter />
      {cars.length > 0 ? (
        <CarsList
          onOpenModal={onOpenModal}
          cars={
            !filterValue ? cars : cars.filter(car => car.make === filterValue)
          }
        />
      ) : null}

      {!isLoading && cars.length !== allCars.length && (
        <Button type="button" onClick={handleLoMoBtnClick}>
          Load more
        </Button>
      )}

      {isModalOpen && !isLoading && (
        <Modal onModalClose={onModalClose}>
          <CarInfo />
        </Modal>
      )}
    </>
  );
};

export default Catalogue;
