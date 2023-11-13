import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleProduct from "../components/SingleProduct";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadProduct from "../dashboard/UploadProduct";
import ManageProduct from "../dashboard/ManageProduct";
import EditProduct from "../dashboard/EditProduct";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../Private Route/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/shop',
          element: <Shop/>,
        },
        {
          path: '/about',
          element: <About/>,
        },
        {
          path: '/blog',
          element: <Blog/>,
        },
        {
          path: '/single-product',
          element: <SingleProduct/>,
        },
        {
          path: "/product/:id",
          element: <SingleProduct/>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`) 
        },
      ]
    },  // this part was for frontend
    {
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>,  // private routing
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadProduct/>,
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageProduct/>,
        },
        {
          path: "/admin/dashboard/edit-products/:id",
          element: <EditProduct/>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },

      ]
    },{
      path: "sign-up",
      element: <Signup/>
    },{
      path: "login",
      element: <Login/>
    },{
      path: "/logout",
      element: <Logout/>
    }
  ]);

  export default router;