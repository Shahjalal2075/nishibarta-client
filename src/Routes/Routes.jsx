import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import About from "../Pages/About/About";
import Policy from "../Pages/Policy/Policy";
import Terms from "../Pages/Terms/Terms";
import Contact from "../Pages/Contact/Contact";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: "/:name",
        element: <PrivateRoute><CategoryNews></CategoryNews></PrivateRoute>,
        loader: ({ params }) => fetch(`https://nishibarta-server.vercel.app/menu/${params.name}`)
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://nishibarta-server.vercel.app/news-details/${params.id}`)
      },
      {
        path: "/about",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "/privacy-policy",
        element: <PrivateRoute><Policy></Policy></PrivateRoute>
      },
      {
        path: "/terms",
        element: <PrivateRoute><Terms></Terms></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
    ]
  },
]);

export default Routes;