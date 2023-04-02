import { createSlice, Slice } from "@reduxjs/toolkit";

export interface ThemeState {
  themeName: string;
}

export const themeSlice: Slice<ThemeState> = createSlice({
  name: "theme",
  initialState: {
    themeName: "dark",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.themeName = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
