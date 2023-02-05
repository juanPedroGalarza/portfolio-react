import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import proyectsReducer, { ProyectsState } from "./proyects/proyectsSlice";
import themeReducer, { ThemeState } from "./theme/themeSlice";
export interface StoreInterface {
  theme: ThemeState,
  proyectsData: ProyectsState
};

export const store: ToolkitStore<StoreInterface> = configureStore({
  reducer: {
    theme: themeReducer,
    proyectsData: proyectsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    inmutableCheck: false,
    serializableCheck: false,
  })
});