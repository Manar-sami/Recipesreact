
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function Mainlayout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer/>
    </>
    
  )
}

export default Mainlayout;