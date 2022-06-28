import { createSlice } from "@reduxjs/toolkit";

const initialLoader = {
  loading: false
};

const loaderSLice = createSlice({
  name: "loader",
  initialState: initialLoader,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    }
  }
});

export const loaderActions = loaderSLice.actions;

export default loaderSLice.reducer;
