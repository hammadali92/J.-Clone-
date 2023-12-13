import React,{useEffect} from 'react'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

import BeTheFirst from '../../components/BeTheFirst'

const ProductsPage = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <div>
         <Navbar/>
      <Products/>
      <BeTheFirst/>
    <Footer/>
    </div>
  )
}

export default ProductsPage
