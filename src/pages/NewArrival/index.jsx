import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './NewArrival.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import BeTheFirst from '../../components/BeTheFirst'

const NewArrival = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  return (
    <>
       <Navbar/> 
     <div className='bg-img' style={{ marginTop: '18vh' }}></div>
     <div className="mt-4 container d-flex flex-wrap justify-content-center gap-5 ">
          <div><Link to="/Products/UN-STITCHED"><img src="https://www.junaidjamshed.com/media/wysiwyg/unstitched1_8.jpg" style={{ width: "31rem" }} alt="" /> </Link> </div>
          <div><Link to="/Products/KAMEEZ SHALWAR"><img src="https://www.junaidjamshed.com/media/wysiwyg/ks1_3.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>
          <div><Link to="/Products/WOMEN'S STITCHED"><img src="https://www.junaidjamshed.com/media/wysiwyg/STITCHED_32.jpg" style={{ width: "31rem" }} alt="" /> </Link> </div>
          <div><Link to="/Products/KURTA"><img src="https://www.junaidjamshed.com/media/wysiwyg/kurta2_7.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>      
      </div>
<BeTheFirst/>
     <Footer/>
    </>
  )
}

export default NewArrival
