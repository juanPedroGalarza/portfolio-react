import { configureStore, Store } from "@reduxjs/toolkit";
import proyectsReducer, { ProyectsState } from "./slices/proyectsSlice.js";
import jobsReducer, { JobsState } from "./slices/jobsSlice.js";
import themeReducer, { ThemeState } from "../features/theme/themeSlice.js";
export interface StoreInterface {
  theme: ThemeState;
  proyectsData: ProyectsState;
  jobsData: JobsState;
}

export const store: Store<StoreInterface> = configureStore({
  reducer: {
    theme: themeReducer,
    proyectsData: proyectsReducer,
    jobsData: jobsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      inmutableCheck: false,
      serializableCheck: false,
    }),
});
