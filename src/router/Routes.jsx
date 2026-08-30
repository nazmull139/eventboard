import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import About from "../pages/About";
import Detailspage from "../pages/Detailspage";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
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
        element: <RequireAuth>
          <Schedule />
        </RequireAuth>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/login",
        element: <Login />,
      }
    
    ],
  },
]);

export default router;