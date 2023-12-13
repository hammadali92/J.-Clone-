import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Adminproducts.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useSelector,useDispatch } from 'react-redux';
// import { fetchUnstitchedProducts } from '../../reduxtoolkit/ProductsSlice';

const AdminProducts = () => {
  const navigate=useNavigate()
  const { category } = useParams();
  // const dispatch=useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUnstitchedProducts(category)); // Call the action as a function
  // }, [dispatch, category]);
  // const newProducts = useSelector((state) => state.products.unstitchedItems.unstitched)
  // console.log("newProducts",newProducts);
  // const newProductsArray = Array.isArray(newProducts) ? newProducts : [];
  // console.log(newProductsArray)

  const {handleChange,handleReset,handleBlur ,handleSubmit ,values,touched, errors} = useFormik({
    initialValues: {
      id:'',
image:'',
image1:'',
image2:'',
image3:'',
image4:'',
title:'',
price:'',
category:'',
color:'',
ProductCategory:'',
collections:'',
design:'',
fabric:""
    },
    validationSchema:Yup.object({
      id:Yup.string().required('Its Required'),
        image:Yup.string().required('Its Required'),
        image1:Yup.string().required('Its Required'),
        image2:Yup.string().required('Its Required'),
        image3:Yup.string().required('Its Required'),
        image4:Yup.string().required('Its Required'),
        title:Yup.string().required('Its Required'),
        price:Yup.string().required('Its Required'),
        category:Yup.string().required('Its Required'),
        color:Yup.string().required('Its Required'),
        design:Yup.string().required('Its Required'),
        ProductCategory:Yup.string().required('Its Required'),
        collections:Yup.string().required('Its Required'),
        fabric:Yup.string().required('Its Required')
     


    }),
    onSubmit:async(values, { resetForm })=>{
      const storeData = await axios.post("http://localhost:4000/api/unstitched",values)
console.log(values);
navigate(`/Products/${values.category}`);
resetForm();
    }
  })
  return (
  
    
   <div>
         <div className='row mt-5'>
       <form className="col-md-6 mt-4 form" onSubmit={handleSubmit}>
       <h3 className='fw-bolder'>Add Products</h3>
       <div className='d-flex flex-wrap justify-content-evenly'>
       <div>
     
    <input type="text" name='id' className="input" placeholder='Id' onChange={handleChange} value={values.id} onBlur={handleBlur}/>
    <p className='text-danger'>{touched.id && errors.id? errors.id:null}</p>
  </div>
      <div>
    
    <input type="text" name='image' className="input" placeholder='Image' onChange={handleChange} value={values.image} onBlur={handleBlur}/>
    <p className='text-danger'>{touched.image && errors.image? errors.image:null}</p>
  </div>
  <div>
 
    <input type="text" name='image1' className="input" placeholder='Image1' onChange={handleChange} value={values.image1} onBlur={handleBlur} />
    <p className='text-danger'>{touched.image1 && errors.image1 ? errors.image1:null}</p>
  </div>
  <div>
  
    <input type="text" name='image2' className="input" placeholder='Image2' onChange={handleChange} value={values.image2} onBlur={handleBlur} />
    <p className='text-danger'>{touched.image2 && errors.image2 ? errors.image2:null}</p>
  </div>
  <div>

    <input type="text" name='image3' className="input" placeholder='Image3' onChange={handleChange} value={values.image3} onBlur={handleBlur} />
    <p className='text-danger'>{touched.image3 && errors.image3 ? errors.image3:null}</p>
  </div>
  <div>

<input type="text" name='image4' className="input" placeholder='Image4' onChange={handleChange} value={values.image4} onBlur={handleBlur} />
<p className='text-danger'>{touched.image4 && errors.image4 ? errors.image4:null}</p>
</div>
  <div>
   
    <input type="text" name='title' className="input" placeholder='Title' onChange={handleChange} value={values.title} onBlur={handleBlur} />
    <p className='text-danger'>{touched.title && errors.title ? errors.title:null}</p>
  </div>  
  <div>
 
    <input type="text" name='price' className="input" placeholder='Price' onChange={handleChange} value={values.price} onBlur={handleBlur} />
    <p className='text-danger'>{touched.price && errors.price? errors.price:null}</p>
  </div> 
  <div>
  
    <input type="text" name='color' className="input" placeholder='Color' onChange={handleChange} value={values.color} onBlur={handleBlur} />
    <p className='text-danger'>{touched.color && errors.color ? errors.color:null}</p>
  </div> 
  <div>
   
    <input type="text" name='ProductCategory' className="input" placeholder='ProductCategory' onChange={handleChange} value={values.ProductCategory} onBlur={handleBlur} />
    <p className='text-danger'>{touched.ProductCategory && errors.ProductCategory ? errors.ProductCategory:null}</p>
  </div> 
  <div>
   
    <input type="text" name='category' className="input" placeholder='Category' onChange={handleChange} value={values.category} onBlur={handleBlur} />
    <p className='text-danger'>{touched.category && errors.category ? errors.category:null}</p>
  </div> 
  <div>
   
    <input type="text" name='collections' className="input" placeholder='Collections' onChange={handleChange} value={values.collections} onBlur={handleBlur} />
    <p className='text-danger'>{touched.collections && errors.collections ? errors.collections:null}</p>
  </div> 
  <div>

    <input type="text" name='design' className="input" placeholder='Design' onChange={handleChange} value={values.design} onBlur={handleBlur} />
    <p className='text-danger'>{touched.design && errors.design ? errors.design:null}</p>
  </div> 
  <div>
    
    <input type="text" name='fabric' className="input" placeholder='Fabric' onChange={handleChange} value={values.fabric} onBlur={handleBlur} />
    <p className='text-danger'>{touched.fabric && errors.fabric ? errors.fabric:null}</p>
  </div> 
  <div>
  </div>
             <button type='submit' className='btnn mt-2' style={{height:"50px"}}>
                Submit
                </button></div>
</form>
<div className='col-md-6 d-flex flex-column justify-content-center align-items-center section-r '>
       <h1 className='text-center'>Products List</h1>
  
       <p className='text-center p'>Check products</p>
       <div className='d-flex flex-wrap justify-content-evenly gap-3'>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/WOMEN'S KURTI" className='text-white'>KURTI 
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/WOMEN'S STITCHED" className='text-white'>STITCHED
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/UN-STITCHED" className='text-white'>UN-STITCHED 
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/KURTA" className='text-white'>KURTA
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/WAISTCOAT" className='text-white'>WAISTCOAT 
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/KAMEEZ SHALWAR" className='text-white'>MEN KAMEEZ 
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/KID GIRLS" className='text-white'>KID GIRLS
        </Link> </button>
  </div>
  <div>
      <button className='btnnn'>
     <Link to="/ProductsDashboard/KID BOYS" className='text-white'>KID BOYS
        </Link> </button>
  </div>

  </div>  
     
     </div>
     </div> 
</div>  


 
  
  )   
 }

 export default AdminProducts 


//  <div className="row mt-3" >
     
//      <div className='col-md-6' >
//        <form className="form" onSubmit={handleSubmit}> 
//          <h3 className='fw-bolder'>Add Products</h3>
//          <div className='d-flex flex-wrap justify-content-evenly' >
//          <div><input type="number" name='id' placeholder='Id' className="input" onChange={handleChange} value={values.id} onBlur={handleBlur}/>
//     <p className='text-danger'>{touched.id && errors.id ? errors.id:null}</p></div>
//     <div>
//     <input type="text" name='image' placeholder='Image' className="input" onChange={handleChange} value={values.image} onBlur={handleBlur} />
//     <p className='text-danger'>{touched.image && errors.image ? errors.image:null}</p>
//     </div>
//     <div>
//   <input type="text" name='image1' className="input" placeholder='Image1' onChange={handleChange} value={values.image1} onBlur={handleBlur} />
//     <p className='text-danger'>{touched.image1 && errors.image1 ? errors.image1:null}</p>
//   </div> 
//   <div >
 
//  <input type="text" name='image2' className="input" placeholder='Image2' onChange={handleChange} value={values.image2} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.image2 && errors.image2 ? errors.image2:null}</p>
// </div>
// <div>

//  <input type="text" name='image3' className="input" placeholder='Image3' onChange={handleChange} value={values.image3} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.image3 && errors.image3 ? errors.image3:null}</p>
// </div>
// <div>

//  <input type="text" name='image4' className="input" placeholder='Image4' onChange={handleChange} value={values.image4} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.image4 && errors.image4 ? errors.image4:null}</p>
// </div>

// <div>
 
//  <input type="text" name='title' className="input" placeholder='Title' onChange={handleChange} value={values.title} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.title && errors.title ? errors.title:null}</p>
// </div>  
// <div>

//  <input type="text" name='price' className="input" placeholder='Price' onChange={handleChange} value={values.price} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.price && errors.price? errors.price:null}</p>
// </div> 
// <div>

//  <input type="text" name='color' className="input" placeholder='Color' onChange={handleChange} value={values.color} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.color && errors.color ? errors.color:null}</p>
// </div> 

// <div>

//  <input type="text" name='category' placeholder='Category' className="input" onChange={handleChange} value={values.category} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.category && errors.category ? errors.category:null}</p>
// </div> 
// <div>

//  <input type="text" name='collections' placeholder='Collections' className="input" onChange={handleChange} value={values.collections} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.collections && errors.collections ? errors.collections:null}</p>
// </div> 
// <div>

//  <input type="text" name='design' placeholder='Design' className="input" onChange={handleChange} value={values.design} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.design && errors.design ? errors.design:null}</p>
// </div> 
// <div>

//  <input type="text" name='fabric' placeholder='Fabric' className="input" onChange={handleChange} value={values.fabric} onBlur={handleBlur} />
//  <p className='text-danger'>{touched.fabric && errors.fabric ? errors.fabric:null}</p>
// </div> 
        
//          <button type='submit' className='btnn mt-2' style={{height:"50px"}}>
//          Submit
//          </button></div>
//        </form>
//      </div>

    //  <div className='col-md-6 d-flex flex-column justify-content-center align-items-center section-r '>
    //    <h1   className='text-center'>Welcome in J.</h1>
    //    <p className='text-center p'>If you have an Account</p>
    //  <button className='btnn'>
    //  <Link to="/" className='text-white'>Sign In 
    //     </Link> </button>
    //  </div>
    //  </div> 