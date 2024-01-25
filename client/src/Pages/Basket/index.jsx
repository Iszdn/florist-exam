import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'

const Basket = () => {
  const {addWish,wish} = useContext(WishlistContext)
  const {deletebasket,incbasket,decbasket,basket} = useContext(BasketContext)
  return (
    <>
       <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlist">

        {
          basket.length===0 ? <h2>Basket is empty</h2> : <div className="container">
  <div className="row">
    <h2>Basket</h2>
    {
     basket && basket.map(product=>
     <div key={product._id} className="col-lg-4">
       <div className='card-flo'>
      <div className="img">
        <img src={product.image} alt="" />
        <div className="icons">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <span onClick={()=>deletebasket(product)}>
            <i className="fa-regular fa-trash-can"></i>
                
                </span>
                
                <span onClick={()=>addWish(product)}>
                {
                    wish.some(x=>x._id===product._id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
                
                
                </span>
               
            <span><i className="fa-regular fa-eye"></i></span>
        </div>
      </div>
      <div className="info">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
{/* <h5>total:${product.total}</h5> */}
        <div>
          <div onClick={()=>incbasket(product)} className="btn">+</div>
          <div onClick={()=>incbasket(product)} className="btn">{product.count}</div>
          <div onClick={()=>decbasket(product)} className="btn">-</div>
        </div>

      </div>
    </div>
     </div>
      )
    }
    {/* <p>subtotal:{subtotal}$</p> */}
  </div>
</div>
        }

      </div>
    </>
  )
}

export default Basket

