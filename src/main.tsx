import ReactDOM from 'react-dom/client'
import './index.css'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
import React from 'react'
const ProviderStore = lazy(()=>import('./ProviderStore'))
const App = lazy(()=>import('./App'))

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Suspense fallback={<Loading sx={{minHeight:"100vh"}} />}>
    <ProviderStore>
      <App />
    </ProviderStore>
  </Suspense>
);
