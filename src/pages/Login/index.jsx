import React from "react";
import "./Login.css";
import LoginC from "../../components/LoginC";

const Login = () => {
  return (
    <>
      {" "}
      <marquee className="textt" behavior="scroll" direction="right" scrollamount="9">
        J. Junaid Jamshed Website
      </marquee>
      <div className="text-center">
        <img
          src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png"
          alt=""
          className="imagee"
        />
      </div>
      <LoginC />
      <p className="texttt text-center">J. Junaid Jamshed copyright © 2023</p>
    </>
  );
};

export default Login;

// import React from 'react';
// import axios from 'axios';
// import './Login.css';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const {
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     values,
//     touched,
//     errors,
//   } = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email('Invalid email address').required('Email is Required'),
//       password: Yup.string().max(15, 'Maximum 15 characters or less').required('Password is Required'),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const storeData = await axios.post('http://localhost:4000/api/user/login', values);

//         if (storeData.data.status === 401) {
//           toast.error(storeData.data.message);
//         } else if (storeData.data.status === 404) {
//           toast.warning(storeData.data.message);
//         } else {
//           toast.success(storeData.data.message);
//           localStorage.setItem('token', storeData.data.token);
//           navigate('/');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   });

//   return (

//     <div className="row" >

//           <div className='col-md-6' >
//             <form className="form" onSubmit={handleSubmit}>
//               <h1>Sign in</h1>
//               <div className='social-container'>
//                 <a href='#' className='social'>
//                   <i className='fab fa-facebook-f'></i>
//                 </a>
//                 <a href='#' className='social'>
//                   <i className='fab fa-google-plus-g'></i>
//                 </a>
//                 <a href='#' className='social'>
//                   <i className='fab fa-linkedin-in'></i>
//                 </a>
//               </div>
//               <span>or use your account</span>
//               <div>
//                 <input
//                   type='email'
//                   name='email'
//                   className='input'
//                   placeholder='Email'
//                   onChange={handleChange}
//                   value={values.email}
//                   onBlur={handleBlur}
//                 />
//                 <p className='text-danger'>{touched.email && errors.email ? errors.email : null}</p>
//               </div>
//               <div>
//                 <input
//                   type='password'
//                   name='password'
//                   className='input'
//                   placeholder='Password'
//                   onChange={handleChange}
//                   value={values.password}
//                   onBlur={handleBlur}
//                 />
//                 <p className='text-danger'>{touched.password && errors.password ? errors.password : null}</p>
//               </div>
//               <button type='submit' className='btnn'>
//                 Sign In
//               </button>
//             </form>
//           </div>

//           <div className='col-md-6 d-flex flex-column justify-content-center align-items-center section-r '>
//             <h1   className='text-center'>Welcome in J.</h1>
//             <p className='text-center p'>Don't have an Account?</p>
//             <button className='btnn'>
//                 Sign Up
//               </button>
//           </div>
//           </div>

//   );
// };

// export default Login;
