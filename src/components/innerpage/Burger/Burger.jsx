import BurgerApi from "./BurgerApi"


function Burger() {
  return (
    <>
              <div className="bg-[#F5ECE7] h-100">

     {/* hero */}
      <div className="container  mx-auto  px-7 md:px-0 h-full">
        <div className="flex justify-center flex-col items-start h-full md:max-w-[50%] gap-3">
        <h1 className="text-[24px] md:text-[48px] font-bold text-sm/13">
          Signature Burgers
        </h1>
        <p className="max-w-[70%] md:text-[18px]">
            From flame-grilled beef to vibrant plant-based creations, explore our curated
           selection of elevated backyard classics.
        </p>
      </div> 
      </div>
      
    </div>


    <div className="py-14">
      <BurgerApi/>
    </div>
    </>
  )
}

export default Burger