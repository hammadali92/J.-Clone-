import React from 'react'
import { Link } from 'react-router-dom'
const MenCard = () => {
  return (
    <div>
       <div className="mt-5 container d-flex flex-wrap justify-content-center gap-5 ">
          <div><Link to="/Products/KAMEEZ SHALWAR"><img src="https://www.junaidjamshed.com/media/wysiwyg/ks1_3.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>
          <div><Link to="/Products/KURTA"><img src="https://www.junaidjamshed.com/media/wysiwyg/kurta2_7.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>
          <div><Link to="/Products/WAISTCOAT"><img src="https://www.junaidjamshed.com/media/wysiwyg/Waistcoat_4.jpg" style={{ width: "31rem" }} alt="" /></Link>  </div>
          <div><Link to="/Products/KID BOYS"><img src="https://www.junaidjamshed.com/media/wysiwyg/kid-boys_11.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>      
      </div>
    </div>
  )
}

export default MenCard
