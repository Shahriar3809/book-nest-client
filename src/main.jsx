import React from 'react'
import ReactDOM from 'react-dom/client'
 import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
