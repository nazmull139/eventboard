import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext.jsx'
import ScheduleContextProvider from './context/ScheduleContext.jsx'
import './index.css'
import router from './router/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ScheduleContextProvider>
      <RouterProvider router={router} />
    </ScheduleContextProvider>,
  </AuthContextProvider>



)
