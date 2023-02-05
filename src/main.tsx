import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from './components/Loading';
import React from 'react';
const ProviderStore = React.lazy(() => import('./ProviderStore'));
const App = React.lazy(() => import('./App'));

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.Suspense fallback={<Loading sx={{ minHeight: "100vh" }} />}>
    <ProviderStore>
      <App />
    </ProviderStore>
  </React.Suspense>
);
