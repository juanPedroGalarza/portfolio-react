import { createSlice, Slice } from "@reduxjs/toolkit";
import proyectsData, { Proyect } from "./proyectsData";

export interface ProyectsState {
  proyects: Array<Proyect>;
}

export const proyectsSlice: Slice<ProyectsState> = createSlice({
  name: "proyectsData",
  initialState: proyectsData,
  reducers: {
    // add reducers on future
  },
});

export default proyectsSlice.reducer;
