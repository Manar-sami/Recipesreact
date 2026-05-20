
import { createBrowserRouter } from "react-router";
import Mainlayout from "./src/layout/Mainlayout";
import Main from "./src/components/home/Main";
import About from "./src/components/innerpage/About";
const router = createBrowserRouter([
  {
  path:"/",
  element:<Mainlayout />,
  children:[
    {
        index:true,
        element:<Main />
    },
   {
    path:"about",
    element:<About />
   },

  ]

  },
]);

export default router;