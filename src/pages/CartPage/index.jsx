import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'

const CartPage = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <div>
      <Navbar/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default CartPage
