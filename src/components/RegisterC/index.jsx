import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { toast } from 'react-toastify';

 
const RegisterC = () => {
  const navigate = useNavigate();
  const {handleChange,handleReset,handleBlur ,handleSubmit ,values,touched, errors} = useFormik({
    initialValues: {
firstName:'',
lastName:'',
email:'',
password:'',
address:'',
city:'',
state:'',
zip:''
    },
    validationSchema:Yup.object({
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First Name Required'),
    lastName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Last Name Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string()
    .max(15, 'Maximum 15 characters or less')
    .required('Password is Required'),
    address:Yup.string().required('Address is Required'),
    city:Yup.string().required('City is Required'),
    state:Yup.string().required('State is Required'),
    zip:Yup.string().required('ZIP is Required'),


    }),
    onSubmit: async (values) => {
      try {
        const storeData = await axios.post("http://localhost:4000/api/user", values);
    
        // Check if email already exists
        if (storeData.data.status === 409) {
          toast.error("Email already exists");
        } else {
          // If the email doesn't exist, proceed with other actions
          console.log("values", values);
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error creating user");
      }
    }
}); 
  return (
    <>
<div className="row mt-3" >
     
     <div className='col-md-6' >
       <form className="form" onSubmit={handleSubmit}> 
         <h2 className='fw-bolder'>Create Account</h2>
         <div className='d-flex flex-wrap justify-content-evenly' >
         <div><input type="text" name='firstName' placeholder='FirstName' className="input" onChange={handleChange} value={values.firstName} onBlur={handleBlur}/>
    <p className='text-danger'>{touched.firstName && errors.firstName ? errors.firstName:null}</p></div>
    <div>
    <input type="text" name='lastName' placeholder='LastName' className="input" onChange={handleChange} value={values.lastName} onBlur={handleBlur} />
    <p className='text-danger'>{touched.lastName && errors.lastName ? errors.lastName:null}</p>
    </div>
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
         <div> <input type="text" name='address' placeholder="Address" className="input"  onChange={handleChange} value={values.address} onBlur={handleBlur} />
    <p className='text-danger'>{touched.address && errors.address ? errors.address:null}</p></div>
    <div>   <input type="text" name='city' placeholder='City' className="input" onChange={handleChange} value={values.city} onBlur={handleBlur} />
    <p className='text-danger'>{touched.city && errors.city ? errors.city:null}</p></div>
    <div><input name='state' onChange={handleChange} placeholder='State' value={values.state} onBlur={handleBlur} className="input"/>
    <p className='text-danger'>{touched.state && errors.state ? errors.state:null}</p></div>
    <div><input type="text" name='zip' placeholder='Zip' className="input" onChange={handleChange} value={values.zip} onBlur={handleBlur}/>
<p className='text-danger'>{touched.zip && errors.zip ? errors.zip:null}</p></div>
         <button type='submit' className='btnn'>
           Sign Up
         </button></div>
       </form>
     </div>

     <div className='col-md-6 d-flex flex-column justify-content-center align-items-center section-r '>
       <h1   className='text-center'>Welcome in J.</h1>
       <p className='text-center p'>If you have an Account</p>
     <button className='btnn'>
     <Link to="/" className='text-white'>Sign In 
        </Link> </button>
     </div>
     </div>
    </>
    
  )
}

export default RegisterC








// {/* <div className=" container pt-2 lead-text text-center fw-light">
// <h3 className='text-danger'>CREATE NEW ACCOUNT</h3>
// </div>
// <div className='register-wrapper pt-2 container'>
// <p>Already Registered <Link to="/LoginPage">Login</Link> </p>
// {/* <hr />
// <button className='btn btn-danger d-block w-100 mb-2'>Login with Google</button>
// <button className='btn btn-primary d-block w-100'>Login with Facebook</button>
// <hr /> */}
// {/* <form className="row g-3 mt-4" onSubmit={handleSubmit}>
// <div className="col-md-6">
// <label for="firstName" className="form-label">First Name</label>
// <input type="text" name='firstName' className="form-control" onChange={handleChange} value={values.firstName} onBlur={handleBlur}/>
// <p className='text-danger'>{touched.firstName && errors.firstName ? errors.firstName:null}</p>
// </div>
// <div className="col-md-6">
// <label for="lastName" className="form-label">Last Name</label>
// <input type="text" name='lastName' className="form-control" onChange={handleChange} value={values.lastName} onBlur={handleBlur} />
// <p className='text-danger'>{touched.lastName && errors.lastName ? errors.lastName:null}</p>
// </div>
// <div className="col-md-6">
// <label for="email" className="form-label">Email</label>
// <input type="email"name='email' className="form-control" onChange={handleChange} value={values.email} onBlur={handleBlur} id="inputEmail4"/>
// <p className='text-danger'>{touched.email && errors.email ? errors.email:null}</p>
// </div>
// <div className="col-md-6">
// <label for="password" className="form-label">Password</label>
// <input type="password" name='password' className="form-control" onChange={handleChange} value={values.password} onBlur={handleBlur} id="inputPassword4" />
// <p className='text-danger'>{touched.password && errors.password ? errors.password:null}</p>
// </div>
// <div className="col-12">
// <label for="address" className="form-label">Address</label>
// <input type="text" name='address' className="form-control" onChange={handleChange} value={values.address} onBlur={handleBlur} id="inputAddress" placeholder="1234 Main St"/>
// <p className='text-danger'>{touched.address && errors.address ? errors.address:null}</p>
// </div>

// <div className="col-md-6">
// <label for="city" className="form-label">City</label>
// <input type="text" name='city' className="form-control" onChange={handleChange} value={values.city} onBlur={handleBlur} id="inputCity"/>
// <p className='text-danger'>{touched.city && errors.city ? errors.city:null}</p>
// </div>
// <div className="col-md-4">
// <label for="state" className="form-label">State</label>
// <select id="inputState" name='state' onChange={handleChange} value={values.state} onBlur={handleBlur} className="form-select">
// <option>City</option>
// <option>Punjab</option>
// <option>KPK</option>
// <option>Balochistan</option>
// <option>Sindh</option>
// <option>Kashmir</option>
// </select>
// <p className='text-danger'>{touched.state && errors.state ? errors.state:null}</p>
// </div>
// <div className="col-md-2">
// <label for="zip" className="form-label">Zip</label>
// <input type="text" name='zip' className="form-control" onChange={handleChange} value={values.zip} onBlur={handleBlur} id="inputZip"/>
// <p className='text-danger'>{touched.zip && errors.zip ? errors.zip:null}</p>
// </div>

// <div className="col-12">
// <button type="submit" className="btn btn-danger" onResetCapture={handleReset}>Register Now</button>
// </div>
// </form>
// </div>   */}