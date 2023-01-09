import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './features/store'
import './index.css'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
const ThemeProvider = lazy(()=>import('@mui/material/styles/ThemeProvider'))
import darkTheme from "./features/theme/darkTheme"
import lightTheme from "./features/theme/lightTheme"
const themes = {
  dark: darkTheme,
  light: lightTheme
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={themes[store.getState().theme]}>
        <App />
      </ThemeProvider>
    </Suspense>
  </Provider>
);
