import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-hot-toast";

export const BasketContext=createContext()


const BasketProvider = ({children}) => {
const [basket, setbasket] = useLocalStorage("basketlist")
// const subtotal=basket.reduce((initial,product)=>initial+parseInt(product.total),0)

function addbasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket!==-1) {
        basket[existBasket].count++
        // basket[existBasket].total=basket[existBasket].count*basket[existBasket].price
        setbasket([...basket])
        toast.success('Successfully increased basket!');
    }
    else{
        // const total=basket[existBasket].price
       setbasket([...basket,{...product,count:1}]) 
       toast.success('Successfully added basket!');

    }
    
}

function incbasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket!==-1) {
        basket[existBasket].count++
        // basket[existBasket].total=basket[existBasket].count*basket[existBasket].price
        setbasket([...basket])
        toast.success('Successfully increased basket!');
    }
    
    
}
function decbasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket!==-1) {
        if (basket[existBasket].count===1) {
            return deletebasket(product)
        }
        basket[existBasket].count--
        // basket[existBasket].total=basket[existBasket].count*basket[existBasket].price
        setbasket([...basket])
        toast.success('Successfully increased basket!');
    }
    
    
}


function deletebasket(product) {
    const existBasket=basket.filter(x=>x._id!==product._id)
   setbasket(existBasket)
   toast.success('Successfully deleted!');
}

const data={
    basket,setbasket,addbasket,deletebasket,incbasket,decbasket
}

  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
