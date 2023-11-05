export const selectCars = state => state.cars.carsArray;

export const selectAllCars = state => state.cars.allCars;

export const selectCarsIsLoading = state => state.cars.isLoading;

export const selectCarsError = state => state.cars.error;

export const selectFavoritesCars = state => state.favorites.favorites;

export const selectCarInfo = state => state.cars.carInfo;

export const selectCarsFilter = state => state.filter.filterValue;
