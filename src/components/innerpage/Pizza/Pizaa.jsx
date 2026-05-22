import PizaaApi from "./PizaaApi";
import pizaa from "./../../../assets/image/Pizza2.png"

function Pizaa() {
  return (
    <>
          <div className="bg-[#F5ECE7] h-100">

     {/* hero */}
      <div className="container  mx-auto  px-7 md:px-0 h-full">
        <div className="flex justify-center flex-col items-start h-full md:max-w-[50%] gap-3">
        <h1 className="text-[24px] md:text-[48px] font-bold text-sm/13">
          Gourmet Pizzas
        </h1>
        <p className="max-w-[70%] md:text-[18px]">
      Discover the art of artisanal dough and premium toppings. From wood-fired
        classics to contemporary fusion, find your perfect slice.
        </p>
      </div> 
      </div>
      
    </div>


    <div className="py-14">
      < PizaaApi/>
    </div>

    <div className="py-12">
        <div className=" container px-7 md:px-0 mx-auto bg-[#F5ECE7] py-24 rounded-3xl">
           <div className="grid grid-cols-2">
          <div className="px-8">
              <h3 className="text-[48px] font-bold text-[#1E1B18] ">Master the Art of Dough</h3>
            <p className="text-[#444841] text-[18px] my-2.5">Join 50,000+ home chefs and receive our exclusive "Pasta
                Manifesto" guide, including secret family techniques for the perfect
                al dente bite..
                </p>

                <form action="" className="flex  flex-col md:flex-row gap-3 mt-6" >
                <input name="email" type="email" placeholder="Email address" className="border-none bg-white
                py-3 px-6 rounded-xl focus:outline-none
                "/> 
                <button className="bg-[#964824] text-[16px] text-white rounded-xl py-3 px-6">Subscribe</button>

                </form>
          </div>

               <div className="flex justify-center items-center " >
              <img src={pizaa} alt="" />
               </div>

           </div>

        </div>

    </div>
    </>

  
  )
}

export default Pizaa