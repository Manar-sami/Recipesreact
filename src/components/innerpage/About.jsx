import Subscribe from "../home/Subscribe";
import Aboutimage from "../../assets/image/about.png"

function About() {
  return (
    <>
    <div className="bg-[#F5ECE7] h-100">

     {/* hero */}
      <div className="container  mx-auto  px-7 md:px-0 h-full">
        <div className="flex justify-center flex-col items-start h-full md:max-w-[50%] gap-3">
        <h1 className="text-[24px] md:text-[48px] font-bold text-sm/13">
          Cultivating the art of the
          modern home kitchen.
        </h1>
        <p className="max-w-[70%] md:text-[18px]">
       Culinara was born from a simple belief: that every meal is
        an opportunity for connection, and every kitchen is a
           sanctuary of creativity.
        </p>
      </div> 
      </div>
      
    </div>


  
     <div className="container  mx-auto  px-7 md:px-0  grid grid-cols-1 md:grid-cols-2 py-14">
      <div>
        <img src={Aboutimage} alt="Aboutimage" className="rounded-full w-[80%]" />

      </div>
      <div className="py-11">
        <h3 className="text-[32px] font-bold">
          Our Story
        </h3>
        <p className="text-[#444841] text-[16px] mt-3">
What started as a digital journal for seasonal recipes has evolved into a global community of
food enthusiasts. Our founder, a culinary designer, noticed a gap between high-pressure
professional cooking and the soul-nourishing reality of home cooking.
        </p>
        <br />
                <p className="text-[#444841] text-[16px] mt-3">
Culinara was designed to bridge that gap. We focus on the "Modern Organic" approach—
where high-end editorial sophistication meets the tactile warmth of a family table. We don't
just share recipes; we share the rituals that make a home feel lived-in.
        </p>

      <br />
                      <p className="text-[#444841] text-[16px] mt-3">
"The kitchen isn't just about the food. It's about the pause in a busy day, the scent of
fresh rosemary, and the quiet joy of creating something with your hands."
        </p>
      </div>
     </div>



    <div className="bg-[#E9E1DC] py-14">
       <div className="container  mx-auto  px-7 md:px-0">
       <div className="text-center">
         <h2 className="text-[32px] font-bold">Our Core Values</h2>
        <p className="text-[16px]">The pillars that define the Culinara experience.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white px-12 py-12.5 rounded-2xl mt-7">
          <h3 className="text-[24px] font-semibold text-[#50614B]">Sustainability</h3>
          <p className="text-[16px] text-[#444841] mt-2.5">
            We prioritize seasonal ingredients and
            mindful consumption, encouraging a
            respectful relationship with the land.
          </p>
        </div>

         <div className="bg-white px-12 py-12.5 rounded-2xl mt-7">
          <h3 className="text-[24px] font-semibold text-[#50614B]">Aesthetics</h3>
          <p className="text-[16px] text-[#444841] mt-2.5">
            We believe visual beauty is a key
            ingredient in any meal. Our platform is
            designed to inspire through refined
            editorial design.
          </p>
        </div>
         

          <div className="bg-white px-12 py-12.5 rounded-2xl mt-7">
          <h3 className="text-[24px] font-semibold text-[#50614B]">Community</h3>
          <p className="text-[16px] text-[#444841] mt-2.5">
            Cooking is a universal language. We
            foster a space where diversity of flavor
            and tradition is celebrated openly.
          </p>
        </div>
       </div>
     </div>
    </div>
    

    <div className="">
      <Subscribe />
    </div>
    </>
  )
}

export default About