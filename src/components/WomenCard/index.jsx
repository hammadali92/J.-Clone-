import React from 'react'
import { Link } from 'react-router-dom'
const WomenCard = () => {
  return (
    <div>
      <div className="mt-5 container d-flex flex-wrap justify-content-center gap-5 ">
          <div><Link to="/Products/UN-STITCHED"><img src="https://www.junaidjamshed.com/media/wysiwyg/unstitched1_8.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>
          <div><Link to="/Products/WOMEN'S STITCHED"><img src="https://www.junaidjamshed.com/media/wysiwyg/STITCHED_32.jpg" style={{ width: "31rem" }} alt="" /></Link></div>
          <div><Link to="/Products/WOMEN'S KURTI"><img src="https://www.junaidjamshed.com/media/wysiwyg/kurti2_11.jpg" style={{ width: "31rem" }} alt="" /></Link> </div>
          <div><Link to="/Products/KID GIRLS"><img src="https://www.junaidjamshed.com/media/wysiwyg/kid-girl.jpg" style={{ width: "31rem" }} alt="" /></Link></div>      
      </div>
    </div>
  )
}

export default WomenCard
