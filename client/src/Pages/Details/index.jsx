import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'

const Details = () => {
  const {addWish,wish} = useContext(WishlistContext)
    const {addbasket,basket} = useContext(BasketContext)
  const [data, setData] = useState(null)

  const {id}=useParams()

useEffect(() => {
getIdData()
}, [])

  async function getIdData() {
    const res=await axios(`http://localhost:3000/${id}`)
 setData(res.data)
}
  return (
    <>
       <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="details">
        <div className="container">
          <div className="row">
            {
              data &&  <div className="col-lg-6">
            <div key={data._id} className='card-flo'>
      <div className="img">
        <img src={data.image} alt="" />
        <div className="icons">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <span onClick={()=>addWish(data)}>
                {
                    wish.some(x=>x._id===data._id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
                
                
                </span>
                <span><i className="fa-regular fa-eye"></i></span>
        </div>
      </div>
      <div className="info">
        <h4>{data.title}</h4>
        <p>${data.price}</p>
        <h6 onClick={()=>addbasket(data)} >add to cart</h6>
      </div>
    </div>
            </div>
            }
           
          </div>
        </div>
      {/* {
        data && 
      } */}
    </div>
    </>
    
  )
}

export default Details
