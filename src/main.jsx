import ReactDOM from 'react-dom/client'
import './index.css'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
const ProviderStore = lazy(()=>import('./ProviderStore'))
const App = lazy(()=>import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <ProviderStore>
      <App />
    </ProviderStore>
  </Suspense>
);
