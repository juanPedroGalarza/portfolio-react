import { Theme, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loading from "./components/Loading.js";
import { StoreInterface } from "./redux/store.js";
const MainLayout = React.lazy(() => import("./layouts/MainLayout.js"));
const Home = React.lazy(() => import("./pages/Home.js"));
const Proyects = React.lazy(() => import("./pages/Proyects.js"));
const Experience = React.lazy(() => import("./pages/Experience.js"));
import darkTheme from "./features/theme/darkTheme.js";
import lightTheme from "./features/theme/lightTheme.js";
import { ThemeState } from "./features/theme/themeSlice.js";

interface Themes {
  [key: string]: Theme;
}

function App() {
  const themes: Themes = {
    dark: darkTheme,
    light: lightTheme,
  };

  const { themeName }: ThemeState = useSelector(
    (state: StoreInterface): ThemeState => state.theme
  );

  return (
    <React.Suspense fallback={<Loading sx={{ minHeight: "100vh" }} />}>
      <ThemeProvider theme={themes[themeName]}>
        <BrowserRouter>
          <MainLayout>
            <React.Suspense fallback={<Loading />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/proyects' element={<Proyects />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/*' element={<Navigate to='/' />} />
              </Routes>
            </React.Suspense>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </React.Suspense>
  );
}

export default App;
