
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading";
import Card from "../../Card";

function BurgerApi() {


  const [pasta, setpasta] = useState([]);
  const [load, setload] = useState(true);
  const [error, seterror] = useState("");



  const getpasta = async () => {

    try {

      const respons = await axios.get(
        "https://forkify-api.jonas.io/api/v2/recipes?search=hamburger"
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
        
          {pasta.map((item) => (
             <Card  pasta={item} />
          ))}

          </div>
      </div>

    </>
  )
}

export default BurgerApi