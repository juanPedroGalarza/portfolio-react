import { Theme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import { StoreInterface } from "./features/store";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Home = React.lazy(() => import("./pages/Home"));
const Proyects = React.lazy(() => import("./pages/Proyects"));
const ThemeProvider = React.lazy(
  () => import("@mui/material/styles/ThemeProvider")
);
import darkTheme from "./features/theme/darkTheme";
import lightTheme from "./features/theme/lightTheme";
import { ThemeState } from "./features/theme/themeSlice";

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
