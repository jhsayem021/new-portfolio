import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Resume from "../Pages/Home/Resume/Resume";
import Work from "../Pages/Home/Work/Work";
import Contact from "../Pages/Home/Contact/Contact";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/resume',
        element: <Resume></Resume>
      },
      {
        path: '/work',
        element: <Work></Work>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },

    ]
  }

]);