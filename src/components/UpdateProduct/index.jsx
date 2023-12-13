// import React,{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom';
// import axios from 'axios'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// const UpdateProduct = () => {

//   const {id} = useParams();
//   const [productData, setProductData] = useState(null);
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/unstitched/id/${id}`);
//        console.log("response",response.data.unstitched)
//   setProductData(response.data.unstitched)
       
//       } catch (err) {
//         console.error(err);
//       }
//     };
  
//     fetchData();
//   }, [id]);
//     console.log(productData?.category)
//   const {handleChange,handleReset,handleBlur ,handleSubmit ,values,touched, errors} = useFormik({
//       initialValues: {
//         id: productData ? productData.id : '',
//         image: productData ? productData.image : '',
//         image1: productData ? productData.image1 : '',
//         image2: productData ? productData.image2 : '',
//         image3: productData ? productData.image3 : '',
//         title: productData ? productData.title : '',
//         price: productData ? productData.price : '',
//         category: productData ? productData.category : '',
//         color: productData ? productData.color : '',
//         ProductCategory: productData ? productData.ProductCategory : '',
//         collections: productData ? productData.collections : '',
//         design: productData ? productData.design : '',
//         fabric: productData ? productData.fabric : ''
//       },
//       validationSchema:Yup.object({
//         id:Yup.string().required('Its Required'),
//           image:Yup.string().required('Its Required'),
//           image1:Yup.string().required('Its Required'),
//           image2:Yup.string().required('Its Required'),
//           image3:Yup.string().required('Its Required'),
//           title:Yup.string().required('Its Required'),
//           price:Yup.string().required('Its Required'),
//           category:Yup.string().required('Its Required'),
//           color:Yup.string().required('Its Required'),
//           design:Yup.string().required('Its Required'),
//           ProductCategory:Yup.string().required('Its Required'),
//           collections:Yup.string().required('Its Required'),
//           fabric:Yup.string().required('Its Required')
       
  
  
//       }),
//       onSubmit:async(values, { resetForm })=>{
//         // const storeData = await axios.post("http://localhost:4000/api/unstitched",values)
//   console.log(values);
//   resetForm();
//       }
//     })
//     return (
//       <>
        
//         <div className='register-wrapper pt-2 container'>
//          <form className="row g-3 mt-4" onSubmit={handleSubmit}>
//          <div className="col-md-3">
//          <label for="id" className="form-label">ID</label>
//       <input type="text" name='id' className="form-control" onChange={handleChange} value={values.id} onBlur={handleBlur}/>
//       <p className='text-danger'>{touched.id && errors.id? errors.id:null}</p>
//     </div>
//         <div className="col-md-6">
//       <label for="image" className="form-label">Image</label>
//       <input type="text" name='image' className="form-control" onChange={handleChange} value={values.image} onBlur={handleBlur}/>
//       <p className='text-danger'>{touched.image && errors.image? errors.image:null}</p>
//     </div>
//     <div className="col-md-6">
//       <label for="image1" className="form-label">Image1</label>
//       <input type="text" name='image1' className="form-control" onChange={handleChange} value={values.image1} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.image1 && errors.image1 ? errors.image1:null}</p>
//     </div>
//     <div className="col-md-6">
//       <label for="image2" className="form-label">Image2</label>
//       <input type="text" name='image2' className="form-control" onChange={handleChange} value={values.image2} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.image2 && errors.image2 ? errors.image2:null}</p>
//     </div>
//     <div className="col-md-6">
//       <label for="image3" className="form-label">Image3</label>
//       <input type="text" name='image3' className="form-control" onChange={handleChange} value={values.image3} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.image3 && errors.image3 ? errors.image3:null}</p>
//     </div>
//     <div className="col-md-6">
//       <label for="title" className="form-label">Title</label>
//       <input type="text" name='title' className="form-control" onChange={handleChange} value={values.title} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.title && errors.title ? errors.title:null}</p>
//     </div>  
//     <div className="col-md-6">
//       <label for="price" className="form-label">Price</label>
//       <input type="text" name='price' className="form-control" onChange={handleChange} value={values.price} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.price && errors.price? errors.price:null}</p>
//     </div> 
//     <div className="col-md-6">
//       <label for="color" className="form-label">Color</label>
//       <input type="text" name='color' className="form-control" onChange={handleChange} value={values.color} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.color && errors.color ? errors.color:null}</p>
//     </div> 
//     <div className="col-md-6">
//       <label for="ProductCategory" className="form-label">ProductCategory</label>
//       <input type="text" name='ProductCategory' className="form-control" onChange={handleChange} value={values.ProductCategory} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.ProductCategory && errors.ProductCategory ? errors.ProductCategory:null}</p>
//     </div> 
//     <div className="col-md-6">
//       <label for="category" className="form-label">Category</label>
//       <input type="text" name='category' className="form-control" onChange={handleChange} value={values.category} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.category && errors.category ? errors.category:null}</p>
//     </div> 
//     <div className="col-md-6">
//       <label for="collections" className="form-label">Collections</label>
//       <input type="text" name='collections' className="form-control" onChange={handleChange} value={values.collections} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.collections && errors.collections ? errors.collections:null}</p>
//     </div> 
//     <div className="col-md-6">
//       <label for="design" className="form-label">Design</label>
//       <input type="text" name='design' className="form-control" onChange={handleChange} value={values.design} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.design && errors.design ? errors.design:null}</p>
//     </div> 
//     <div className="col-md-6">
//       <label for="fabric" className="form-label">Fabric</label>
//       <input type="text" name='fabric' className="form-control" onChange={handleChange} value={values.fabric} onBlur={handleBlur} />
//       <p className='text-danger'>{touched.fabric && errors.fabric ? errors.fabric:null}</p>
//     </div> 
//   <div className="col-12">
//       <button type="submit" className="btn btn-danger" onResetCapture={handleReset}>Register Now</button>
//     </div>
//   </form>
//   </div>  
  
  
//   <div>
//   {/* <div className='d-flex flex-wrap justify-content-around '>
//     <button><Link to="/ProductsDashboard/WOMEN'S KURTI">WOMEN'S KURTI</Link></button> 
//   </div> */}
//   </div>
//       </>
      
//     )
//   }

// export default UpdateProduct
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
const UpdateProduct = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState(null);
const navigate = useNavigate() ;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/unstitched/id/${id}`);
        setProductData(response.data.unstitched);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      id: '',
      image: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      title: '',
      price: '',
      category: '',
      color: '',
      ProductCategory: '',
      collections: '',
      design: '',
      fabric: '',
    },
    validationSchema: Yup.object({
      id: Yup.string().required('This field is required'),
      image: Yup.string().required('This field is required'),
      image1: Yup.string().required('This field is required'),
      image2: Yup.string().required('This field is required'),
      image3: Yup.string().required('This field is required'),
       image4: Yup.string().required('This field is required'),
      title: Yup.string().required('This field is required'),
      price: Yup.string().required('This field is required'),
      category: Yup.string().required('This field is required'),
      color: Yup.string().required('This field is required'),
      ProductCategory: Yup.string().required('This field is required'),
      collections: Yup.string().required('This field is required'),
      design: Yup.string().required('This field is required'),
      fabric: Yup.string().required('This field is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Handle form submission
      // Call your API to update data here
      const UpdateData = await axios.put(`http://localhost:4000/api/unstitched/${id}`,values)
      // alert("product updated sucessfully")
      toast.success("Product updated Sucessfully");
      navigate(`/Products/${productData.category}`);
      console.log(values);
      resetForm();
    },
  });

  // Set the form values to the fetched product data once available
  useEffect(() => {
    if (productData) {
      formik.setValues(productData);
    }
  }, [productData]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  
    return (
      <>
      <marquee className="textt" behavior="scroll" direction="right" scrollamount="9">
        J. Junaid Jamshed Products
      </marquee>
      <div className="row mt-3">
  <form className="col-md-6 mt-4 form" onSubmit={formik.handleSubmit}>
    <h3 className="fw-bolder">Update Products</h3>
    <div className="d-flex flex-wrap justify-content-evenly">
      <div>
        <input
          type="text"
          name="id"
          className="input"
          placeholder="Id"
          onChange={formik.handleChange}
          value={formik.values.id}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.id && formik.errors.id ? formik.errors.id : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="image"
          className="input"
          placeholder="Image"
          onChange={formik.handleChange}
          value={formik.values.image}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.image && formik.errors.image ? formik.errors.image : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="image1"
          className="input"
          placeholder="Image1"
          onChange={formik.handleChange}
          value={formik.values.image1}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.image1 && formik.errors.image1 ? formik.errors.image1 : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="image2"
          className="input"
          placeholder="Image2"
          onChange={formik.handleChange}
          value={formik.values.image2}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.image2 && formik.errors.image2 ? formik.errors.image2 : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="image3"
          className="input"
          placeholder="Image3"
          onChange={formik.handleChange}
          value={formik.values.image3}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.image3 && formik.errors.image3 ? formik.errors.image3 : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="image4"
          className="input"
          placeholder="Image4"
          onChange={formik.handleChange}
          value={formik.values.image4}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.image4 && formik.errors.image4 ? formik.errors.image4 : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="title"
          className="input"
          placeholder="Title"
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.title && formik.errors.title ? formik.errors.title : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="price"
          className="input"
          placeholder="Price"
          onChange={formik.handleChange}
          value={formik.values.price}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.price && formik.errors.price ? formik.errors.price : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="color"
          className="input"
          placeholder="Color"
          onChange={formik.handleChange}
          value={formik.values.color}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.color && formik.errors.color ? formik.errors.color : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="ProductCategory"
          className="input"
          placeholder="ProductCategory"
          onChange={formik.handleChange}
          value={formik.values.ProductCategory}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.ProductCategory && formik.errors.ProductCategory ? formik.errors.ProductCategory : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="category"
          className="input"
          placeholder="Category"
          onChange={formik.handleChange}
          value={formik.values.category}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.category && formik.errors.category ? formik.errors.category : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="collections"
          className="input"
          placeholder="Collections"
          onChange={formik.handleChange}
          value={formik.values.collections}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.collections && formik.errors.collections ? formik.errors.collections : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="design"
          className="input"
          placeholder="Design"
          onChange={formik.handleChange}
          value={formik.values.design}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.design && formik.errors.design ? formik.errors.design : null}
        </p>
      </div>

      <div>
        <input
          type="text"
          name="fabric"
          className="input"
          placeholder="Fabric"
          onChange={formik.handleChange}
          value={formik.values.fabric}
          onBlur={formik.handleBlur}
        />
        <p className="text-danger">
          {formik.touched.fabric && formik.errors.fabric ? formik.errors.fabric : null}
        </p>
      </div>

      <div>
        <button type="submit" className="btnn mt-2" style={{ height: '50px' }}>
          Submit
        </button>
      </div>
    </div>
  </form>
  <div className='col-md-6 d-flex flex-column justify-content-center align-items-center section-r '>
       <h1 className='text-center'> Update The Products</h1>
   <p className='text-center p'>If You don't want to update products!</p>
       <div>
   <Link to="/Dashboard"><button type='submit' className='btnn'>
           Back
         </button></Link>   
 </div>  
     
     </div>

</div>
</>

  );
};

export default UpdateProduct;

      // <div className="register-wrapper pt-2 container">
      //   <form className="row g-3 mt-4" onSubmit={formik.handleSubmit}>
      //     <div className="col-md-3">
      //       <label htmlFor="id" className="form-label">
      //         ID
      //       </label>
      //       <input
      //         type="text"
      //         name="id"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.id}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.id && formik.errors.id ? formik.errors.id : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="image" className="form-label">
      //         Image
      //       </label>
      //       <input
      //         type="text"
      //         name="image"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.image}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.image && formik.errors.image ? formik.errors.image : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="image1" className="form-label">
      //         Image1
      //       </label>
      //       <input
      //         type="text"
      //         name="image1"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.image1}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.image1 && formik.errors.image1 ? formik.errors.image1 : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="image2" className="form-label">
      //         Image2
      //       </label>
      //       <input
      //         type="text"
      //         name="image2"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.image2}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.image2 && formik.errors.image2 ? formik.errors.image2 : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="image3" className="form-label">
      //         Image3
      //       </label>
      //       <input
      //         type="text"
      //         name="image3"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.image3}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.image3 && formik.errors.image3 ? formik.errors.image3 : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="title" className="form-label">
      //         Title
      //       </label>
      //       <input
      //         type="text"
      //         name="title"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.title}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.title && formik.errors.title ? formik.errors.title : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="price" className="form-label">
      //         Price
      //       </label>
      //       <input
      //         type="text"
      //         name="price"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.price}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.price && formik.errors.price ? formik.errors.price : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="color" className="form-label">
      //         Color
      //       </label>
      //       <input
      //         type="text"
      //         name="color"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.color}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.color && formik.errors.color ? formik.errors.color : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="ProductCategory" className="form-label">
      //         ProductCategory
      //       </label>
      //       <input
      //         type="text"
      //         name="ProductCategory"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.ProductCategory}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.ProductCategory && formik.errors.ProductCategory ? formik.errors.ProductCategory : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="category" className="form-label">
      //         Category
      //       </label>
      //       <input
      //         type="text"
      //         name="category"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.category}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.category && formik.errors.category ? formik.errors.category : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="collections" className="form-label">
      //         Collections
      //       </label>
      //       <input
      //         type="text"
      //         name="collections"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.collections}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.collections && formik.errors.collections ? formik.errors.collections : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="design" className="form-label">
      //         Design
      //       </label>
      //       <input
      //         type="text"
      //         name="design"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.design}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.design && formik.errors.design ? formik.errors.design : null}
      //       </p>
      //     </div>
      //     <div className="col-md-6">
      //       <label htmlFor="fabric" className="form-label">
      //         Fabric
      //       </label>
      //       <input
      //         type="text"
      //         name="fabric"
      //         className="form-control"
      //         onChange={formik.handleChange}
      //         value={formik.values.fabric}
      //         onBlur={formik.handleBlur}
      //       />
      //       <p className="text-danger">
      //         {formik.touched.fabric && formik.errors.fabric ? formik.errors.fabric : null}
      //       </p>
      //     </div>
      //     <div className="col-12">
      //       <button type="submit" className="btn btn-danger">
      //         Register Now
      //       </button>
      //     </div>
      //   </form>
      // </div>