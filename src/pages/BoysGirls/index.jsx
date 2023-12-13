import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import BoysGirlsCard from '../../components/BoysGirlsCard'
import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'

const BoysGirls = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <>
     <Navbar/>
     <BoysGirlsCard/>
     <BeTheFirst/>
     <Footer/> 
    </>
  )
}

export default BoysGirls
