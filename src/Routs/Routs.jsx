import {createBrowserRouter,} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Main/Home";
import Login from "../Users/Login";
import Register from "../Users/Register";

  const router = createBrowserRouter([
    {
        path: '/' ,
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]    
    },
    {
      path:'/login',
      element: <Login></Login>
    }
    ,
    {
      path:'/register',
      element: <Register></Register>
    }
  ])

  export default router