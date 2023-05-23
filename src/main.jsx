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
import ToyDetails from './Componets/ToyDetails';
import Error from './Componets/Error';
import MyToys from './Componets/MyToys';
import PrivateRoute from './Componets/PrivateRoute';
import UpdateToy from './Componets/UpdateToy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: 'addtoy',
        element: <AddToy></AddToy>
      },
      {
        path: 'alltoys',
        element: <Alltoys></Alltoys>,
        loader: () => fetch('http://localhost:5000/newtoy')
      },
      {
        path: '/:_id',
        element: <ToyDetails></ToyDetails>
      },
      {
        path: 'mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'updatetoy',
        element: <UpdateToy></UpdateToy>,
        loader: () => fetch()
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
