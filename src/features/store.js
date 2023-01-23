import { configureStore } from "@reduxjs/toolkit";
import proyectsReducer from "./proyects/proyectsSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    proyectsData: proyectsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    inmutableCheck: false,
    serializableCheck: false,
  })
})