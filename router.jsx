
import { createBrowserRouter } from "react-router";
import Mainlayout from "./src/layout/Mainlayout";
import Main from "./src/components/home/Main";
import About from "./src/components/innerpage/About";
import Pasta from "./src/components/innerpage/Pasta/Pasta";
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
   {
    path:"pasta",
    element:<Pasta />
   }
  ]

  },
]);

export default router;