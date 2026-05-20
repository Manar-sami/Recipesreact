
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <div className="bg-[#F5ECE7] py-14">

        <div className="container mx-auto px-7 md:px-0">
            <div className="flex justify-between items-center flex-col md:flex-row ">
                <div >
                  <Link to="/" className="text-[24px] font-bold text-[#1E1B18]"> Culinara</Link>
                  <p className=" max-w-[40%] text-[16px] text-[#444841] mt-2">

                    © 2024 Culinara. Crafted for the modern
                   kitchen. Elevating your everyday cooking
                   experience through beautiful design and
                   curated recipes.
                  </p>
                </div>

                <div className="flex gap-20 flex-col md:flex-row justify-center">
                   <div>
                     <h3 className="text-[#50614B] text-[16px] font-semibold">EXPLORE</h3>
                    <ul className="text-[#444841] mt-2">
                        <li><Link to="">Journal</Link></li>
                        <li><Link to="">Recipes</Link></li>
                        <li><Link to="">Newsletter</Link></li>
                    </ul>
                   </div>

                   <div>
                     <h3 className="text-[#50614B] text-[16px] font-semibold">LEGAL</h3>
                    <ul className="text-[#444841] mt-2">
                        <li><Link to="">Terms</Link></li>
                        <li><Link to="">Privacy</Link></li>
                        <li><Link to="">Cookies</Link></li>
                    </ul>
                   </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer;