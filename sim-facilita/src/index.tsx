import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

//Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Pages
import App from './App';
import Login from './pages/acesso/login';
import Register from './pages/acesso/register';
import Main from './pages/main/main';
import Perfil from './pages/main/perfil';
import Excluir from './pages/main/excluir';

//const [logado] = useState(false)

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Login />
  },
  {
    path: "/register",
    element:  <Register />
  },
  {
    path: "/main",
    element: <Main />
  },
  {
    path: "/perfil",
    element: <Perfil />
  },
  {
    path: "/excluir",
    element: <Excluir />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
