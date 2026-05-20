
import { createBrowserRouter } from "react-router";
import Mainlayout from "./src/layout/Mainlayout";
import Main from "./src/components/home/Main";

const router = createBrowserRouter([
  {
  path:"/",
  element:<Mainlayout />,
  children:[
    {
        index:true,
        element:<Main />
    },
//    {
//     path:"about",
//     element:<About />
//    },
//   {
//     path:"pizza",
//     element:<Pizza />
//   }
  ]

  },
]);

export default router;