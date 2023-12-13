// import React from 'react'
// import axios from "axios"
// import './Login.css'
// import { Link } from 'react-router-dom'
// import Navbar from '../../components/Navbar'
// import BeTheFirst from '../../components/BeTheFirst'
// import Footer from '../../components/Footer'
// import { useFormik } from 'formik';
//  import * as Yup from 'yup'; 
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const navigate = useNavigate();
//   const {handleChange,handleReset,handleBlur ,handleSubmit ,values,touched, errors} = useFormik({
//     initialValues: {
//  email:'',
// password:''

//     },
//     validationSchema:Yup.object({
      
//     email: Yup.string().email('Invalid email address').required('Email is Required'),
//     password: Yup.string()
//     .max(15, 'Maximum 15 characters or less')
//     .required('Password is Required')
    


//     }),
// //     onSubmit:async(values)=>{
// //       const storeData = await axios.post("http://localhost:4000/api/user/login",values)
// //       // console.log("store Data", storeData.data.token)
// //       localStorage.setItem("token", storeData.data.token)
// //       if(storeData.data.status===409)
// //       {
// //         toast.warning(storeData.data.message)
// //       }
// //       else{
// //         toast.success(storeData.data.message)
// //         // alert(storeData.data.message)
// //         navigate("/");
// //       }
// // console.log(values);
// //     }
// onSubmit: async (values) => {
//   try {
//     const storeData = await axios.post("http://localhost:4000/api/user/login", values);

//     if (storeData.data.status === 401) {
//       // Incorrect password, display a message to the user
//       toast.error(storeData.data.message);
//     } else if (storeData.data.status === 404) {
//       // User not found, display a message to the user
//       toast.warning(storeData.data.message);
//     } else {
//       // Successful login
//       toast.success(storeData.data.message);
//       localStorage.setItem("token", storeData.data.token);
//       navigate("/");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

//   })


//   return (


//     <> 
//        {/* <Navbar/> */}
//     {/* <div className='login-wrapper container' style={{ paddingTop: '18vh' }}>
//       <div className="row border">
//         <div className="col-md-6 border">
          
//       <form class="row g-3 mt-4" onSubmit={handleSubmit}>
//       <h3 className="text-body">Login</h3>
//   <div class="col-md-12">
//     <label for="email" class="form-label" style={{}}>Email</label>
//     <input type="email" name='email' class="form-control"  onChange={handleChange} value={values.email} onBlur={handleBlur} id="inputEmail4"/>
//     <p className='text-danger'>{touched.email && errors.email ? errors.email:null}</p>
//   </div>
//   <div class="col-md-12">
//     <label for="password" className="form-label">Password</label>
//     <input type="password" name='password'  onChange={handleChange} value={values.password} onBlur={handleBlur} class="form-control" id="inputPassword4"/>
//     <p className='text-danger'>{touched.password && errors.password ? errors.password:null}</p>
//   </div>
 
//   <div class="col-12">
//     <button type="submit" class="btn btn-primary">Login Now</button>
//   </div>
// </form>
//         </div>
//         <div className="col-md-6 border">
      
//         </div>
//       </div>
//     </div> */}
//     <>
    





//     <div className='container-fluid'>
//   <div className='row'>
//     <div className='col-md-6'>
//       <div className="form-container sign-in-container">
//         <form onSubmit={handleSubmit}>
//           <h1>Sign in</h1>
//           <div className="social-container">
//             <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your account</span>
//           <div>
//             <input type="email" name='email' className='input'  placeholder='Email' onChange={handleChange} value={values.email} onBlur={handleBlur} />
//             <p className='text-danger'>{touched.email && errors.email ? errors.email : null}</p>
//           </div>
//           <div>
//             <input type="password" name='password' className='input'  placeholder='Password' onChange={handleChange} value={values.password} onBlur={handleBlur} />
//             <p className='text-danger'>{touched.password && errors.password ? errors.password : null}</p>
//           </div>
//           <button type="submit" className='btnn'>Sign In</button>
//         </form>
//       </div>
//     </div>
//     <div className='col-md-6'>
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start the journey with us</p>
//             <button className="ghost btnn" id="signUp">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>



//     </>
    
//     {/* <BeTheFirst/> */}
//      {/* <Footer/> */}
//     </>
   
//   )
// }

// export default Login


import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginC.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginC= () => {
  const navigate = useNavigate();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      password: Yup.string().max(15, 'Maximum 15 characters or less').required('Password is Required'),
    }),
    onSubmit: async (values) => {
      try {
        const storeData = await axios.post('http://localhost:4000/api/user/login', values);

        if (storeData.data.status === 401) {
          toast.error(storeData.data.message);
        } else if (storeData.data.status === 404) {
          toast.warning(storeData.data.message);
        } else {
          // toast.success(storeData.data.message);
          localStorage.setItem('token', storeData.data.token);
          navigate('/FrontPage');
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    
    <div className="row mt-3" >
     
          <div className='col-md-6' >
            <form className="form" onSubmit={handleSubmit}> 
              <h1>Sign in</h1>
              <div className='social-container'>
                <a href='#' className='social'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#' className='social'>
                  <i className='fab fa-google-plus-g'></i>
                </a>
                <a href='#' className='social'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
              <span className='span'>or use your account</span>
              <div>
                <input
                  type='email'
                  name='email'
                  className='input'
                  placeholder='Email'
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                <p className='text-danger'>{touched.email && errors.email ? errors.email : null}</p>
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  className='input'
                  placeholder='Password'
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                <p className='text-danger'>{touched.password && errors.password ? errors.password : null}</p>
              </div>
              <button type='submit' className='btnn'>
                Sign In
              </button>
            </form>
          </div>

          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center section-r '>
            <h1   className='text-center'>Welcome in J.</h1>
            <p className='text-center p'>Don't have an Account?</p>
          <button className='btnn'>
          <Link to="/RegisterPage" className='text-white'>Sign Up 
             </Link> </button>
          </div>
          </div>
        
     
  );
};

export default LoginC;
