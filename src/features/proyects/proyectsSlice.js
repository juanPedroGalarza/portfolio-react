import { createSlice } from "@reduxjs/toolkit";
import proyectsData from "./proyectsData";

export const proyectsSlice = createSlice({
  name: "proyectsData",
  initialState: proyectsData,
  // reducers: {
    
  // }
})

export default proyectsSlice.reducer