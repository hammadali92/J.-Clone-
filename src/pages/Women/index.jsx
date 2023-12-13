import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import WomenCard from '../../components/WomenCard'
import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'

const Women = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <div>
      <Navbar/>
      <WomenCard/>
      <BeTheFirst/>
      <Footer/>

    </div>
  )
}

export default Women
