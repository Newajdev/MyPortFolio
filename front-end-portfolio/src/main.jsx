import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'
import { ContentProvider } from './provider/ContentProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import initAnimatedFavicon from './utils/animatedFavicon.js'

initAnimatedFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ContentProvider>
        <RouterProvider router={router}/>
      </ContentProvider>
    </AuthProvider>
  </StrictMode>,
)
