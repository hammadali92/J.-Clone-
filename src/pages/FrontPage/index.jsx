



import { useState,useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './FrontPage.css';
import {jwtDecode} from 'jwt-decode'
import axios from 'axios'; 
import { toast } from 'react-toastify';

const FrontPage = ({top}) => {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  const userToken = localStorage.getItem("token");
  console.log("userToken", userToken);
  const user = jwtDecode(userToken);
console.log("User",user)
toast.success(`Welcome ${user.firstName}`);
// const [userData,setUserData] = useState();

// const data = async()=>{
//   const response  = await axios.get(`http://localhost:4000/api/user/${user.userId}`)
//   console.log(response.data)
//   setUserData(response.data.users)
// }
// useEffect(()=>{
//   data();
// },[]);

  return (
    <div className='full-screen'>
     <div className='center-content'>
        <div>
          <img style={{ height: '18vh' }} src='https://www.junaidjamshed.com/media/email/logo/stores/1/logo.png' alt='' />
        </div>
        <div>
          <select id='landing-currency' className='select' name='landing-currency'>
            <option value='PKR'>Pakistan</option>
            <option value='AUD'>Australia</option>
            <option value='NZD'>New Zealand</option>
            <option value='GBP'>United Kingdom</option>
            <option value='US'>United States</option>
            <option value='CA'>Canada</option>
            <option value='ZA'>South Africa</option>
            <option value='USD'>Rest of the World</option>
          </select>
        </div>
        <div>
          <Link to="/MainPage"><button className='button'>Enter</button></Link>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;

// import { Link } from 'react-router-dom';
// import './FrontPage.css';
// import jwtDecode from 'jwt-decode'; // Fix import statement

// const FrontPage = () => {
//   const userToken = localStorage.getItem("token")
//   console.log("userToken", userToken)
//   const user = jwtDecode(userToken); // Fix function name
//   return (
//     <div className='full-screen'>
//       <div className='center-content'>
//         <div>
//           <img style={{ height: '18vh' }} src='https://www.junaidjamshed.com/media/email/logo/stores/1/logo.png' alt='' />
//         </div>
//         <div>
//           <select id='landing-currency' className='select' name='landing-currency'>
//             <option value='PKR'>Pakistan</option>
//             <option value='AUD'>Australia</option>
//             <option value='NZD'>New Zealand</option>
//             <option value='GBP'>United Kingdom</option>
//             <option value='US'>United States</option>
//             <option value='CA'>Canada</option>
//             <option value='ZA'>South Africa</option>
//             <option value='USD'>Rest of the World</option>
//           </select>
//         </div>
//         <div>
//           <Link to="MainPage"><button className='button'>Enter</button></Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FrontPage;


// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import './FrontPage.css';
// // // import jwt from 'jwt-decode'
// // // const FrontPage = () => {
// // //   const userToken = localStorage.getItem("token")
// // // console.log("userToken",userToken)
// // // const user = jwt(userToken);
// // //   return (
// // //     <div className='full-screen'>
// // //       <div className='center-content'>
// // //        <div><img  style={{ height: '18vh' }} src='https://www.junaidjamshed.com/media/email/logo/stores/1/logo.png' alt='' />
// // //             </div>
// // //             <div>
// // //               <select id='landing-currency' className='select' name='landing-currency'>
// // //                 <option value='PKR'>Pakistan</option>
// // //                 <option value='AUD'>Australia</option>
// // //                 <option value='NZD'>New Zealand</option>
// // //                 <option value='GBP'>United Kingdom</option>
// // //                 <option value='US'>United States</option>
// // //                 <option value='CA'>Canada</option>
// // //                 <option value='ZA'>South Africa</option>
// // //                 <option value='USD'>Rest of the World</option>
// // //               </select>
// // //             </div>
// // //             <div> 
// // //              <Link  to="MainPage"><button className='button'>Enter</button></Link> 
// // //             </div>
         
      
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default FrontPage;





// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import './FrontPage.css';

// // // const FrontPage = () => {
// // //   return (
// // //     <div className='full-screen'>
// // //       <div className='center-content'>
// // //        <div><img  style={{ height: '18vh' }} src='https://www.junaidjamshed.com/media/email/logo/stores/1/logo.png' alt='' />
// // //             </div>
// // //             <div>
// // //               <select id='landing-currency' className='select' name='landing-currency'>
// // //                 <option value='PKR'>Pakistan</option>
// // //                 <option value='AUD'>Australia</option>
// // //                 <option value='NZD'>New Zealand</option>
// // //                 <option value='GBP'>United Kingdom</option>
// // //                 <option value='US'>United States</option>
// // //                 <option value='CA'>Canada</option>
// // //                 <option value='ZA'>South Africa</option>
// // //                 <option value='USD'>Rest of the World</option>
// // //               </select>
// // //             </div>
// // //             <div> 
// // //              <Link  to="MainPage"><button className='button'>Enter</button></Link> 
// // //             </div>
         
      
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default FrontPage;

