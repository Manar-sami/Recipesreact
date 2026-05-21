

function Card({pasta,}) {

 
  return (
    <>
         <div className="rounded-xl shadow-2xl">
               <div >
                <img src={pasta.image_url} alt={pasta.title} className="w-full h-75 bg-cover rounded-t-xl" />
               </div>

               <div className="px-6  py-4 pastas-center">
                 <div className="flex justify-between">
                    <h2 className="text-[24px] font-semibold">{pasta.title}</h2>
                    <span className="text-[#747870] text-[30px]">♡</span>
                 </div>
                 <div className="text-gray-500 text-sm mt-2">
                   🧑‍🍳 By: {pasta.publisher}
                 </div>
               </div>
            </div>
    </>
  )
}

export default Card;