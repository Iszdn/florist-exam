import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-hot-toast";

export const WishlistContext=createContext()


const WishlistProvider = ({children}) => {
const [wish, setWish] = useLocalStorage("wishlist")

function addWish(product) {
    const existWsih=wish.findIndex(x=>x._id===product._id)
    if (existWsih===-1) {
        setWish([...wish,{...product}])
        toast.success('Successfully added wish !');
    }
    else{
        return deleteWish(product)
   toast.success('Successfully deleted wish !');

    }
}
function deleteWish(product) {
    const existWsih=wish.filter(x=>x._id!==product._id)
   setWish(existWsih)
   toast.success('Successfully deleted wish !');
}

const data={
    wish,setWish,addWish,deleteWish
}

  return (
    <WishlistContext.Provider value={data}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
