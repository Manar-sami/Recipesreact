
import { createBrowserRouter } from "react-router";
import Mainlayout from "./src/layout/Mainlayout";
import Main from "./src/components/home/Main";
import About from "./src/components/innerpage/About";
import Pasta from "./src/components/innerpage/Pasta/Pasta";
import Pizaa from "./src/components/innerpage/Pizza/Pizaa";
import Burger from "./src/components/innerpage/Burger/Burger";
import Policy from "./src/components/innerpage/Policy";

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
   },
   {
    path:"pizza",
    element:<Pizaa/>
   },
   {
    path:"burger",
    element:<Burger/>
   },
   {
    path:"subscription-policy",
    element:<Policy/>
   }
  ]

  },
  
]);

export default router;