
import Heroimage from "../../assets/image/hero.png";

function Hero() {
  return (
    <>
     <div className="h-screen  bg-no-repeat bg-center bg-cover "
     style={{ backgroundImage: `url(${Heroimage})` }}
     >
    <div className=" container mx-auto px-7 md:px-0 h-full">
        <div className="flex justify-center gap-4 items-center text-center flex-col h-full">
         <h1 className="font-bold text-white text-[48px]">
        Discover the Art of Cooking
      </h1>

      <form action="" className="border-0 bg-[#F5ECE7] py-3 px-4 flex gap-2 rounded-xl">
        <input type="text" placeholder="Search for recipes, ingredients..." 
         className=" focus:border-0 focus:outline-none px-4"
        />
         <button className="bg-[#50614B] px-3 py-2 rounded-lg text-white">Explore</button>
      </form>
     </div>
    </div>
     </div>
    </>
  )
}

export default Hero;