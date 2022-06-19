import { createSlice } from "@reduxjs/toolkit";

const initialBackgroundData = {
  personalBackgrounds: [],
  familyBackgrounds: []
};

const backgroundDataSLice = createSlice({
  name: "backgroundData",
  initialState: initialBackgroundData,
  reducers: {
    setPersonalBackgrounds(state, action) {
      state.personalBackgrounds = action.payload;
    },
    setFamilyBackgrounds(state, action) {
      state.familyBackgrounds = action.payload;
    }
  }
});

export const backgroundDataActions = backgroundDataSLice.actions;

export default backgroundDataSLice.reducer;
