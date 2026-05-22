import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import Card from "../../Card";

function Pizaa() {

  const [pasta, setpasta] = useState([]);
  const [load, setload] = useState(true);
  const [error, seterror] = useState("");
  const [page, setpage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;

const currentItems = pasta.slice(
  startIndex,
  startIndex + itemsPerPage
);

  const getpasta = async () => {

    try {

      const respons = await axios.get(
        "https://forkify-api.jonas.io/api/v2/recipes?search=pizza"
      );

      setpasta(respons.data.data.recipes);
      
      

    } catch (err) {

      seterror("error loading");
      

    }
    finally{
      setload(false);
    }

  };

  useEffect(() => {

    getpasta();

  }, []);

  if (load) {
    return <Loading/>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <>
     <div className="container mx-auto px-7 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        
          {currentItems.map((item) => (
             <Card  pasta={item} />
          ))}

          </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-10">

  <button
    onClick={() => setpage(1)}
    className="px-4 py-2 bg-gray-200 rounded focus:bg-[#50614B] focus:text-white"
  >
    1
  </button>

  <button
    onClick={() => setpage(2)}
    className="px-4 py-2 bg-gray-200 rounded focus:bg-[#50614B] focus:text-white"
  >
    2
  </button>

  <button
    onClick={() => setpage(3)}
    className="px-4 py-2 bg-gray-200 rounded focus:bg-[#50614B] focus:text-white"
  >
    3
  </button>

  <button
    onClick={() => setpage(4)}
    className="px-4 py-2 bg-gray-200 rounded focus:bg-[#50614B] focus:text-white"
  >
    4
  </button>
    <button
    onClick={() => setpage(5)}
    className="px-4 py-2 bg-gray-200 rounded  focus:bg-[#50614B] focus:text-white"
  >
    5
  </button>

    <button
    onClick={() => setpage(6)}
    className="px-4 py-2 bg-gray-200 rounded  focus:bg-[#50614B] focus:text-white"
  >
    6
  </button>
      <button
    onClick={() => setpage(7)}
    className="px-4 py-2 bg-gray-200 rounded  focus:bg-[#50614B] focus:text-white"
  >
    7
  </button>
       <button
    onClick={() => setpage(8)}
    className="px-4 py-2 bg-gray-200 rounded  focus:bg-[#50614B] focus:text-white"
  >
    8
  </button>
        <button
    onClick={() => setpage(9)}
    className="px-4 py-2 bg-gray-200 rounded  focus:bg-[#50614B] focus:text-white"
  >
    9
  </button>


</div>
    </>
  );
}

export default Pizaa