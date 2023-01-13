import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './features/store'
import './index.css'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
const App = lazy(()=>import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
        <App />
    </Suspense>
  </Provider>
);
