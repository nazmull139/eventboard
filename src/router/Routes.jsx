import { createBrowserRouter } from "react-router-dom";
import Detailspage from "../pages/Detailspage";
import Home from "../pages/Home";
import Layout from "../pages/Layout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <Detailspage />,
      }
    
    ],
  },
]);

export default router;