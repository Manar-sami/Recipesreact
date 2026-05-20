

function Subscribe() {
  return (
    <>
    <div className="bg-[#FBF2ED] py-14">
        <div className=" container px-7 md:px-0 mx-auto bg-[#687962] py-24 rounded-3xl">
           <div className="flex justify-center items-center flex-col">
            <h3 className="text-[48px] font-bold text-white ">Join the Journal</h3>
            <p className="text-[#F7FFF0] text-[18px] my-2.5">Join 50,000+ home chefs receiving weekly recipe inspirations and seasonal
               cooking tips.</p>

               <div >
                <form action="" className="flex flex-col md:flex-row gap-3 mt-3.5" >
                <input name="email" type="email" placeholder="Email address" className="border-none bg-white
                py-3 px-6 rounded-xl focus:outline-none
                "/> 
                <button className="bg-[#964824] text-[16px] text-white rounded-xl py-3 px-6">Subscribe</button>

                </form>
               </div>

           </div>

        </div>

    </div>
    </>
  )
}

export default Subscribe