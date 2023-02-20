import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars";
import mapReducer from "./map";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    map: mapReducer,
  },
});

export default store;
