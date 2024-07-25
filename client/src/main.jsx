import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RegisterPage from "./components/auth/register/RegisterPage.jsx";
import LoginPage from "./components/auth/login/loginPage.jsx";
import VideoGamePage from "./views/VideoGames.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import {AuthProvider} from "./components/contexts/authContext/index.jsx";
import AddGame from "./components/games/formPage/AddGame.jsx";


const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>
    },
    {
        path: '/register',
        element:<RegisterPage/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/allvideogames',
        element:<VideoGamePage/>
    },
    {
        path:'/newgame',
        element:<AddGame/>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(



 // <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
 // </React.StrictMode>
)
