import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Proyect } from "./proyects/proyectsData";
import proyectsReducer from "./proyects/proyectsSlice";
import themeReducer from "./theme/themeSlice";

export interface StoreInterface {
  theme: {
    themeName: string
  },
  proyectsData: {
    proyects: Array<Proyect>
  }
}

export const store: ToolkitStore<StoreInterface> = configureStore({
  reducer: {
    theme: themeReducer,
    proyectsData: proyectsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    inmutableCheck: false,
    serializableCheck: false,
  })
})