import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/HomeComponnents/HeaderSec'
import Services from '../../components/HomeComponnents/ServiceSec'
import OurFlowers from '../../components/HomeComponnents/OurFlower'
import Custom from '../../components/HomeComponnents/CustomFlower'
import Ajendro from '../../components/HomeComponnents/Ajendro'

const HomePage = () => {
  return (
    <>
       <Helmet>
        <title>HomePage</title>
      </Helmet>
      <Header/>
      <Services/>
      <OurFlowers/>
      <Custom/>
      <Ajendro/>
    </>
  )
}

export default HomePage
