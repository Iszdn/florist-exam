import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const {deleteWish,wish} = useContext(WishlistContext)
  const {addbasket,basket} = useContext(BasketContext)
  return (
    <>
       <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlist">

        {
          wish.length===0 ? <h2>Wislist is empty</h2> : <div className="container">
  <div className="row">
    <h2>Wishlist</h2>
    {
     wish && wish.map(product=>
     <div key={product._id} className="col-lg-4">
       <div className='card-flo'>
      <div className="img">
        <img src={product.image} alt="" />
        <div className="icons">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <span onClick={()=>deleteWish(product)}>
            <i className="fa-solid fa-heart-circle-minus"></i>
                
                
                </span>
           <span><i className="fa-regular fa-eye"></i></span>
        </div>
      </div>
      <div className="info">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <h6 onClick={()=>addbasket(product)} >add to cart</h6>
      </div>
    </div>
     </div>
      )
    }
    
  </div>
</div>
        }

      </div>
    </>
  )
}

export default Wishlist
