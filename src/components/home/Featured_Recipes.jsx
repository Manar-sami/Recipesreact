
import pizza from "../../assets/image/pizza.png"
import Burger from "../../assets/image/Burger.png"
import pasta from "../../assets/image/pasta.png"
function Featured_Recipes() {
  return (
    <>
    <div className="py-14">
      <div className="container  mx-auto px-7 md:px-0">
        
            <div className="mb-6">
               <span className="text-[16px] text-[#964824]">EDITOR'S CHOICE</span>
              <h2 className="text-[32px] text-[#1E1B18] font-bold">Featured Recipes</h2>
            </div>
             
             <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-xl shadow-2xl">
              <div>
                <img src={pizza} alt="pizza" className=" rounded-t-xl w-full bg-cover" />
              </div>

              <div className="px-3 mt-3 py-5">
                <div className="flex gap-3.5">
                <span className="bg-[#EFE6E2] rounded-lg
                 py-1 px-3 font-medium
                text-[14px] text-[#50614B]">Italian</span>
                <span className="bg-[#EFE6E2] rounded-lg
                 py-1 px-3 font-medium
                text-[14px] text-[#50614B]">Vegetarian</span>
              </div>
              <h2 className="mt-4 font-semibold text-[24px]">Rustic Margherita Pizza</h2>
              </div>
             </div>


             <div className="rounded-xl shadow-2xl">
              <div>
                <img src={Burger} alt="Burger" className=" rounded-t-xl w-full bg-cover" />
              </div>

              <div className="px-3 mt-3 py-5">
                <div className="flex gap-3.5">
                <span className="bg-[#EFE6E2] rounded-lg
                 py-1 px-3 font-medium
                text-[14px] text-[#50614B]">Gourmet</span>
                <span className="bg-[#EFE6E2] rounded-lg
                 py-1 px-3 font-medium
                text-[14px] text-[#50614B]">Lunch</span>
              </div>
              <h2 className="mt-4 font-semibold text-[24px]">Aged Wagyu Brioche Burger</h2>
              </div>
             </div>


             <div className="rounded-xl shadow-2xl">
              <div>
                <img src={pasta} alt="pasta" className=" rounded-t-xl w-full bg-cover" />
              </div>

              <div className="px-3 mt-3 py-5">
                <div className="flex gap-3.5">
                <span className="bg-[#EFE6E2] rounded-lg
                 py-1 px-3 font-medium
                text-[14px] text-[#50614B]">Classic</span>
                <span className="bg-[#EFE6E2] rounded-lg
                 py-1 px-3 font-medium
                text-[14px] text-[#50614B]">Quick</span>
              </div>
              <h2 className="mt-4 font-semibold text-[24px]">Spaghetti Aglio e Olio</h2>
              </div>
             </div>
             </div>
        
      </div>
    </div>
    </>
  )
}

export default Featured_Recipes;