import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ScheduleContextProvider from './context/ScheduleContext.jsx'
import './index.css'
import router from './router/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <ScheduleContextProvider>
    <RouterProvider router={router}/>
  </ScheduleContextProvider>,
      
  
)
