import { createSlice } from "@reduxjs/toolkit";

const initialCarsList = {
  carsList: [],
};
const carsSLice = createSlice({
  name: "carsList",
  initialState: initialCarsList,
  reducers: {
    replaceCars(state, action) {
      return {
        ...state,
        carsList: action.payload.cars,
      };
    },
    deleteCar(state, action) {
      const id = action.payload;
      const newCars = state.carsList.filter((car) => car.id !== id);
      state.carsList = newCars;
    },
    sortExpensive(state) {
      const expensiveFirst = state.carsList.sort((a, b) => b.price - a.price);
      state.carsList = expensiveFirst;
    },
    sortCheap(state) {
      const cheapFirst = state.carsList.sort((a, b) => a.price - b.price);
      state.carsList = cheapFirst;
    },
    sortNew(state) {
      const newFirst = state.carsList.sort((a, b) => b.year - a.year);
      state.cars = newFirst;
    },
    sortOld(state) {
      const oldFirst = state.carsList.sort((a, b) => a.year - b.year);
      state.cars = oldFirst;
    },
  },
});

export const carsActions = carsSLice.actions;
export default carsSLice.reducer;
