import './index.css'


import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
<App />
<Toaster/>
</Provider>
  </BrowserRouter>
    
  
)
