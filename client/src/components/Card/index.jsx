import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'
const Card = (product) => {
    const {addWish,wish} = useContext(WishlistContext)
    const {addbasket,basket} = useContext(BasketContext)

  return (
    <div className='card-flo'>
      <div className="img">
        <div className="sale">new</div>
        <img src={product.image} alt="" />
        <div className="icons">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <span onClick={()=>addWish(product)}>
                {
                    wish.some(x=>x._id===product._id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
                
                
                </span>
                <span><Link to={product._id}><i className="fa-regular fa-eye"></i></Link></span>
        </div>
      </div>
      <div className="info">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <h6 onClick={()=>addbasket(product)} >add to cart</h6>
      </div>
    </div>
  )
}

export default Card
