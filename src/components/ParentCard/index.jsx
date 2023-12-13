// import React, { useState } from 'react';
// import './ParentCard.css'
// import { Link } from 'react-router-dom';
// import ProductData from '../../data/ProductData';

// const ParentCard = () => {
//   const [data,setData] = useState()
//   // const fun=()=>{
//   //   const unstitchedData = ProductData.filter((item) => item.category === 'unstitched');
//   //   setData(unstitchedData)
  
    
//   // }
//   const filterDataByCategory = (category) => {
//     const filteredData = ProductData.filter((item) => item.category === category);
//     setData(filteredData);}
//   return (
//     <>
//    {/* Women section image */}
//    {/* Unstitched */}
//    <div className="promo container d-flex flex-wrap justify-content-center "> {/* Center the inner divs */}
//         <div className="promo-image-left" style={{ padding: '20px' }}> {/* Add padding */}
//           <Link to="/Products/unstitched">
//             <img src="https://www.junaidjamshed.com/media/wysiwyg/ms001.jpg"    onClick={() => filterDataByCategory('unstitched')} style={{ height: "647px", width:"600px" }} alt="" />
//             </Link>
//           <div class="title-v2 title-bottom text-center">
//             <div class="title-light">Unstitched</div>
//             <a href=""><strong>Shop Now</strong></a>
//           </div>
//         </div>
//         <div className='d-flex flex-wrap justify-content-around '>
//             {data?.map((item) => (
//               <div className="card border-0 gap-4 " style={{ width: "17rem" }} key={item.id}>
//                 <Link to={`${item.id}`}>
//                   <img src={item.image} className="card-img-top" alt="..." />
//                 </Link>
//                 <div className="card-body">
//                   <p className="card-title">{item.title}</p>
//                   <h6 className="card-text fw-bold text-danger">{item.price}</h6>
//                   <Link to={`${item.id}`}>
//                     <button type="button" className="btn btn-outline-dark">SHOP NOW</button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//         {/* Kurti */}
//         <div className="promo-image-right" style={{ padding: '20px' }}> {/* Add padding */}
//           <div className="img">
//        <Link to="Products/Kurti"> <img style={{ height: "300px", width: "300px" }} onClick={() => filterDataByCategory('kurti')} src="https://www.junaidjamshed.com/media/wysiwyg/ms-kurti.jpg" alt="" /></Link>  
//           </div>
//           <div class="title-v2 title-bottom">
//             <div class="title-light">Kurti</div>
//             <a href=""><strong>Shop Now</strong></a>
//           </div>
            
//           {/* Stitched */}
//           <div className="img">
//         <Link to="/Products/stitched">  <img style={{ height: "300px", width: "300px" }} onClick={() => filterDataByCategory('stitched')} src="https://www.junaidjamshed.com/media/wysiwyg/ms-s.jpg" alt="" /> </Link> 
//           </div>
//           <div class="title-v2 title-bottom">
//             <div class="title-light">Stitched</div>
//             <a href=""><strong>Shop Now</strong></a>
//           </div>
//         </div>
//       </div>
// {/* men section image */}
//       <div className="promo container d-flex flex-wrap justify-content-center "> 
//       <div className="promo-image-right" style={{ padding: '20px' }}> 
//           <div className="img">
//      <Link to="Products/Kurta>  <img style={{ height: "300px", width: "300px" }} onClick={() => filterDataByCategory('kurta')}  src="https://www.junaidjamshed.com/media/wysiwyg/fs2-152.jpg" alt="" /></Link>     
//           </div>
//           <div class="title-v2 title-bottom">
//             <div class="title-light">Kurta</div>
//             <a href=""><strong>Shop Now</strong></a>
//           </div>
//           <div className="img">
//         <Link to ="Products/waiscoat">  <img style={{ height: "300px", width: "300px" }} onClick={() => filterDataByCategory('waiscoat')} src="https://www.junaidjamshed.com/media/wysiwyg/fs2-158.jpg" alt="" /></Link>  
//           </div>
//           <div class="title-v2 title-bottom">
//             <div class="title-light">Waistcoat</div>
//             <a href=""><strong>Shop Now</strong></a>
//           </div>
//         </div>
//         <div className="promo-image-left" style={{ padding: '20px' }}> 
//           <Link to="Products/kameez"><img src="https://www.junaidjamshed.com/media/wysiwyg/fs2-157.jpg" onClick={() => filterDataByCategory('kameez')} style={{ height: "647px", width:"600px" }} alt="" /></Link>
//           <div class="title-v2 title-bottom text-center">
//             <div class="title-light">Kameez Shalwar</div>
//             <a href=""><strong>Shop Now</strong></a>
//           </div>
//         </div>


       
//       </div>
// {/* Festival coolection  */}

// <div class="container festi d-flex justify-content-center align-items-center">
//   <img src="https://www.junaidjamshed.com/media/wysiwyg/fs2-191.jpg" class="img-fluid p-5" alt=""/>
// </div>
// {/* simple comfortable collection  */}
// <div class="container festi d-flex justify-content-center align-items-center mt-5">
//   <img src="https://www.junaidjamshed.com/media/wysiwyg/Underwear_1.jpg" class="img-fluid p-5" alt=""/>
// </div>



//     </>
    
      
   
//   )
// }

// export default ParentCard;




import React, { useState } from 'react';
import './ParentCard.css';
import { Link } from 'react-router-dom';


const ParentCard = () => {


 

  return (
    <>
      {/* Women section image */}
      {/* Unstitched */}
      <div className="promo container d-flex flex-wrap justify-content-center ">
        <div className="promo-image-left" style={{ padding: '20px' }}>
          <Link to="/Products/UN-STITCHED"> {/* Added quotes here */}
            <img
              src="https://www.junaidjamshed.com/media/wysiwyg/ms001.jpg"
              
              style={{ height: "647px", width: "600px" }}
              alt=""
            />
          </Link>
          <div className="title-v2 title-bottom text-center">
            <div className="title-light">Unstitched</div>
            <Link to="/Products/UN-STITCHED">
              <strong>Shop Now</strong>
            </Link>
          </div>
        </div>
        {/* <div className="d-flex flex-wrap justify-content-around">
          {data?.map((item) => (
            <div className="card border-0 gap-4" style={{ width: "17rem" }} key={item.id}>
              <Link to={`${item.id}`}>
                <img src={item.image} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h6 className="card-text fw-bold text-danger">{item.price}</h6>
                <Link to={`${item.id}`}>
                  <button type="button" className="btn btn-outline-dark">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        {/* Kurti */}
        <div className="promo-image-right" style={{ padding: '20px' }}>
          <div className="img">
            <Link to="/Products/WOMEN'S KURTI"> {/* Added quotes here */}
              <img
                style={{ height: "300px", width: "300px" }}
                
                src="https://www.junaidjamshed.com/media/wysiwyg/ms-kurti.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="title-v2 title-bottom">
            <div className="title-light">Kurti</div>
            <Link to="/Products/WOMEN'S KURTI">
              <strong>Shop Now</strong>
            </Link>
          </div>

          {/* Stitched */}
          <div className="img">
            <Link to="/Products/WOMEN'S STITCHED"> {/* Added quotes here */}
              <img
                style={{ height: "300px", width: "300px" }}
                o
                src="https://www.junaidjamshed.com/media/wysiwyg/ms-s.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="title-v2 title-bottom">
            <div className="title-light">Stitched</div>
            <Link to="/Products/WOMEN'S STITCHED">
              <strong>Shop Now</strong>
            </Link>
          </div>
        </div>
      </div>
      {/* men section image */}
      <div className="promo container d-flex flex-wrap justify-content-center ">
        <div className="promo-image-right" style={{ padding: '20px' }}>
          <div className="img">
            <Link to="/Products/KURTA"> {/* Added quotes here */}
              <img
                style={{ height: "300px", width: "300px" }}
                
                src="https://www.junaidjamshed.com/media/wysiwyg/fs2-152.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="title-v2 title-bottom">
            <div className="title-light">Kurta</div>
            <Link to="/Products/KURTA">
              <strong>Shop Now</strong>
            </Link>
          </div>
          <div className="img">
            <Link to="/Products/WAISTCOAT"> {/* Added quotes here */}
              <img
                style={{ height: "300px", width: "300px" }}
              
                src="https://www.junaidjamshed.com/media/wysiwyg/fs2-158.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="title-v2 title-bottom">
            <div className="title-light">Waistcoat</div>
            <Link to="/Products/WAISTCOAT">
              <strong>Shop Now</strong>
            </Link>
          </div>
        </div>
        <div className="promo-image-left" style={{ padding: '20px' }}>
          <Link to="/Products/KAMEEZ SHALWAR"> {/* Added quotes here */}
            <img
              src="https://www.junaidjamshed.com/media/wysiwyg/fs2-157.jpg"
            
              style={{ height: "647px", width: "600px" }}
              alt=""
            />
          </Link>
          <div className="title-v2 title-bottom text-center">
            <div className="title-light">Kameez Shalwar</div>
            <Link to="/Products/KAMEEZ SHALWAR"> 
              <strong>Shop Now</strong>
            </Link>
          </div>
        </div>
      </div>
      {/* Festival collection */}
      <div className="container festi d-flex justify-content-center align-items-center">
        <img
          src="https://www.junaidjamshed.com/media/wysiwyg/fs2-191.jpg"
          className="img-fluid p-5"
          alt=""
        />
      </div>
      {/* Simple comfortable collection */}
      <div className="container festi d-flex justify-content-center align-items-center mt-5">
        <img
          src="https://www.junaidjamshed.com/media/wysiwyg/Underwear_1.jpg"
          className="img-fluid p-5"
          alt=""
        />
      </div>
    </>
  );
};

export default ParentCard;
