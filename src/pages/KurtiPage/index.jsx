import React ,{useEffect}from 'react'
import Navbar from '../../components/Navbar'

import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'
import KurtiCard from '../../components/KurtiCard'

const KurtiPage = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <div>
     <Navbar/>
     <h5 className='text-center fw-medium m-5'>WOMEN'S KURTI | PRETWEAR | J. JUNAID JAMSHED</h5>
    <KurtiCard/>
     <BeTheFirst/>
     <Footer/>
    </div>
  )
}

export default KurtiPage
