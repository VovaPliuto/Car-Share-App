import PropTypes from 'prop-types';

import CarsItem from 'components/CarsItem/CarsItem';
import { StyledCarsList } from './CarsList.styled';

export const CarsList = ({ onOpenModal, cars }) => {
  return (
    <StyledCarsList>
      {cars.map(el => {
        return <CarsItem onOpenModal={onOpenModal} car={el} key={el.id} />;
      })}
    </StyledCarsList>
  );
};

CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
