import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeName: "dark"
  },
  reducers: {
    changeTheme: (state,action) => {
      state.themeName = action.payload
    }
  }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer