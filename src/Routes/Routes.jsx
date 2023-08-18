import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from "../component/Courses/Courses";
import QnaSection from "../component/QnaSection/QnaSection";
import Community from "../Pages/Home/Community/Community";
import About from "../component/About/About";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/qna",
        element: <QnaSection />,
      },
      {
        path: "/community",
        element: <Community />,
      }, {
        path: '/aboutus',
        element: <About />
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/registration',
        element: <Registration />
      }
    ],
  },
]);

export default router;
