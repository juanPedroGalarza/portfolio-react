import { createSlice, Slice } from "@reduxjs/toolkit";
import proyectsData from "./proyectsData";

export const proyectsSlice: Slice = createSlice({
  name: "proyectsData",
  initialState: proyectsData,
  reducers: {
    // add reducers on future
  }
})

export default proyectsSlice.reducer