import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    color: colorReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    inmutableCheck: false,
    serializableCheck: false,
  })
})