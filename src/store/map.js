import { createSlice } from "@reduxjs/toolkit";

const mapInitialState = {
  coords: [59.9375, 30.308611],
};

const mapSlice = createSlice({
  name: "map",
  initialState: mapInitialState,
  reducers: {
    updateMapRef(state, action) {
      return {
        ...state,
        coords: action.payload.coords,
      };
    },
  },
});

export const mapActions = mapSlice.actions;
export default mapSlice.reducer;
