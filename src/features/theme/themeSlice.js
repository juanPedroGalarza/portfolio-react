import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    theme: "dark"
  },
  reducers: {
    changeTheme: (state,action) => {
      state.theme = action.payload
    }
  }
})

export const {changeTheme} = colorSlice.actions

export default colorSlice.reducer