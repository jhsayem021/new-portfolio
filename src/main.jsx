import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
          <div className='max-w-screen-xl mx-auto bg-[#F2F5F9] lg:pb-32 pb-10'>
            <RouterProvider router={router} />
          </div>
        
  </React.StrictMode>,
)
