import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import MenCard from '../../components/MenCard'
import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'

const Men = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <div>
      <Navbar/>
      <MenCard/>
      <BeTheFirst/>
      <Footer/>
    </div>
  )
}

export default Men
