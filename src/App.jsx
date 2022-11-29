import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
const MainLayout = lazy(()=>import('./layouts/MainLayout'))
const Home = lazy(()=>import('./pages/Home'))
const Proyects = lazy(()=>import('./pages/Proyects'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='proyects' element={<Proyects />} />
          </Route>
          <Route path='/*' element={<Navigate to="/"/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
