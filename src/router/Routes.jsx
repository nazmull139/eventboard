import { createBrowserRouter } from "react-router-dom";
import Detailspage from "../pages/Detailspage";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Schedule from "../pages/MySchedule";



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
      },
      {
        path: "/saved",
        element: <Schedule/>
      },
    
    ],
  },
]);

export default router;