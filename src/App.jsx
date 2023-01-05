import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
const MainLayout = lazy(()=>import('./layouts/MainLayout'))
const Home = lazy(()=>import('./pages/Home'))
const Proyects = lazy(()=>import('./pages/Proyects'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
