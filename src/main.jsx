import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componets/layout/Main.jsx';
import Home from './Componets/Home.jsx';
import Blog from './Componets/Blog.jsx';
import Login from './Componets/Login.jsx';
import Signup from './Componets/Signup.jsx';
import AuthProvider from './Componets/AuthProvider';
import AddToy from './Componets/AddToy';
import Alltoys from './Componets/Alltoys';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/addtoy',
        element: <AddToy></AddToy>
      },
      {
        path: '/alltoys',
        element: <Alltoys></Alltoys>,
        loader: () => fetch('http://localhost:5000/newtoy')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
