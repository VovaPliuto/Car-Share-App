import { useDispatch } from 'react-redux';

import { filterCarsChange } from 'redux/filter/filtersSlice';

import {
  Form,
  FilterWrap,
  FilterInput,
  Label,
  Option,
  Button,
} from './Filter.styled';

import carBrands from '../../data/makes.json';

const Filter = () => {
  // const filterValue = useSelector(selectCarsFilter);
  const dispatch = useDispatch();

  const handleFilterSubmit = e => {
    e.preventDefault();

    console.log(e.target.brand.value);

    dispatch(filterCarsChange(e.target.brand.value));
  };

  return (
    <Form onSubmit={handleFilterSubmit}>
      <FilterWrap>
        <Label htmlFor="brand">Car brand</Label>
        <FilterInput name="brand" id="brand">
          <Option value="">All Cars</Option>
          {carBrands.map((el, idx) => (
            <Option key={idx} value={el}>
              {el}
            </Option>
          ))}
        </FilterInput>
      </FilterWrap>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filter;
