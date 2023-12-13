import React from 'react'
import './BoysGirlsCard.css'
import { Link } from 'react-router-dom'
const BoysGirlsCard = () => {
    


  return (
    <div>
      <div className='text-center mt-4'>
        
        <h1 className='fw-bold fs-1'>Boys & Girls</h1>
        </div>
          
       <div className="mt-5 container d-flex flex-wrap justify-content-center gap-5 ">
          <div> <Link to="/Products/KID GIRLS"><img src="https://www.junaidjamshed.com/media/wysiwyg/kid-girl.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>
          <div><Link to="/Products/KID BOYS"><img src="https://www.junaidjamshed.com/media/wysiwyg/kid-boys_11.jpg" style={{ width: "31rem" }} alt="" /></Link></div>
                                  
      </div>
          <div className='text-center mt-5'>
          
            <span className=" fw-bold  fs-5">NEW COLLECTION</span> 
            <span className=" ">DRESS BRIGHT AND LIVLY</span> 
             <span class="fw-bold  fs-5">WITH J. YOUNGSTERS COLLECTION</span>
          </div>
    </div>
  )
}

export default BoysGirlsCard
