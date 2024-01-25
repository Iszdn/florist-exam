import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import Card from '../../Card'
import { Link } from 'react-router-dom'
const OurFlowers = () => {
  const [data, setData] = useState([])

  async function getData() {
      const res=await axios("http://localhost:3000/")
      setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <section id='our-flowers'>
     <div className="header">
      <h4>OUR FLOWER</h4>
      <h3>New Arrivals</h3>
      </div> 
      <div className="container">
          <div className="category">
        <span>All</span>
        <span>Flower box</span>
        <span>Flower shelf</span>
        <span>Basket of flower</span>
        <span>Gift combos</span>
      </div>
      <div className="row">
        {
          data && data.map(x=>
              <div key={x._id} className="col-lg-3 col-md-6 col-12">
          <Card {...x}/>
        </div>
            )
        }
      
      </div>
      <div className="view">
        <Link>VIEW ALL PRODUCTS</Link>
      </div>
      </div>
    
    </section>
  )
}

export default OurFlowers
