
import { Link } from "react-router-dom";

import buttonImage from "../assets/image/Button.svg";
function Header() {

  return (
    <>
   <div className="bg-[#FFF8F5]  py-6">
       <div className=" container mx-auto px-7 md:px-0">
      <div className="flex justify-between items-center">
        
            <Link to='/' className="text-[#1E1B18] text-[24px] font-bold">Culinara</Link>
            <div className="hidden md:block">
                <nav>
                <ul className="flex gap-6 items-center
                text-[#444841] text-[16px] font-medium
                text-center">
                    <li className="hover:text-[#7a8c74] transition-all">
                        <Link>Home</Link>
                    </li>
                    <li className="hover:text-[#7a8c74] transition-all">
                        <Link to="/about">About</Link>
                    </li>
                     <li className="hover:text-[#7a8c74] transition-all">
                        <Link to="/pizza">Pizza Recipes </Link>
                    </li>
                    <li className="hover:text-[#7a8c74] transition-all">
                        <Link  to="/pasta">Pasta Recipes</Link>
                    </li>
                
                    <li className="hover:text-[#7a8c74] transition-all">
                        <Link to="/Burger">Burger Recipes</Link>
                    </li>
                    <li className="hover:text-[#7a8c74] transition-all">
                        <Link to="/subscription-policy">Subscription Policy</Link>
                    </li>
                </ul>
            </nav>
            </div>
            <div>
              <img src={buttonImage} alt="button" /> 
            </div>
        
     </div>
   </div>
   </div>
    </>
  )
}

export default Header;