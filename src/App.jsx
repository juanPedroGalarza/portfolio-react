import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
const MainLayout = lazy(()=>import('./layouts/MainLayout'))
const Home = lazy(()=>import('./pages/Home'))
const Proyects = lazy(() => import('./pages/Proyects'))
const ThemeProvider = lazy(()=>import('@mui/material/styles/ThemeProvider'))
import darkTheme from "./features/theme/darkTheme"
import lightTheme from "./features/theme/lightTheme"


function App() {
  const themes = {
    dark: darkTheme,
    light: lightTheme
  }

  const {themeName} = useSelector(state=>state.theme)
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={themes[themeName]}>
        <BrowserRouter>
          <MainLayout >
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/proyects' element={<Proyects />} />
                <Route path='/*' element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
