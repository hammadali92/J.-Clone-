import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchUnstitchedProducts } from '../../reduxtoolkit/ProductsSlice';
import { Link } from 'react-router-dom';
import './Products.css';
import Loader from '../Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
  const { category } = useParams();
  const originalProducts = useSelector((state) => state.products.items);
  const newProducts = useSelector((state) => state.products.unstitchedItems.unstitched);
  const newProductsArray = Array.isArray(newProducts) ? newProducts : [];
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState('featured');
  const [loading, setLoading] = useState(true);

 
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchProducts(category));
      await dispatch(fetchUnstitchedProducts(category));
      setLoading(false);

      // Initialize AOS here, after data is fetched
      AOS.init({
        duration: 4000, // Animation duration in milliseconds
        once: true, // Whether animation should only happen once
      });
    };

    fetchData();
  }, [dispatch, category])
  useEffect(() => {
    // Combine both original and new products
    const combinedProducts = [...originalProducts, ...newProductsArray];
    setData(combinedProducts);
  }, [originalProducts, newProductsArray]);

  useEffect(() => {
    const sortedData = [...data];

    if (sortOption === 'lowToHigh') {
      sortedData.sort((a, b) => parseFloat(a.price.replace('PKR ', '')) - parseFloat(b.price.replace('PKR ', '')));
    } else if (sortOption === 'highToLow') {
      sortedData.sort((a, b) => parseFloat(b.price.replace('PKR ', '')) - parseFloat(a.price.replace('PKR ', '')));
    }

    setData(sortedData);
  }, [sortOption, data]);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'featured') {
      const filteredData = originalProducts.filter((item) => item.category === category);
      setData(filteredData);
    } else {
      const sortedData = [...data];

      if (selectedOption === 'lowToHigh') {
        sortedData.sort((a, b) => parseFloat(a.price.replace('PKR ', '')) - parseFloat(b.price.replace('PKR ', '')));
      } else if (selectedOption === 'highToLow') {
        sortedData.sort((a, b) => parseFloat(b.price.replace('PKR ', '')) - parseFloat(a.price.replace('PKR ', '')));
      }

      setData(sortedData);
    }

    setSortOption(selectedOption);
  };

  return (
    <div style={{ paddingTop: '18vh' }}>
      <h5 className='text-center w-bold mt-4'>{category}</h5>
      <div className="sorting-sec filter d-flex align-items-center justify-content-end">
        <p className="mt-3 px-3"><b>Sort By</b></p>
        <select
          className="select-filter border border-bottom w-md-auto mb-2"
          style={{ fontSize: '14px', marginRight: '32px' }}
          name=""
          id=""
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="featured">Featured</option>
          <option value="lowToHigh">Price: Low To High</option>
          <option value="highToLow">Price: High To Low</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="sort mt-3">
          <div className='d-flex flex-wrap justify-content-around '>
            {data.map((item) => (
              <div className="card border-0 gap-4 card-container"   data-aos="fade-up-right" style={{ width: '17rem' }} key={item.id}>
                <Link to={`${item.id}`}>
                  <img src={item.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <p className="card-title">{item.title}</p>
                  <h6 className="card-text fw-bold text-danger">{item.price}</h6>
                  <Link to={`${item.id}`}>
                    <button type="button" className="btn btn-outline-dark">SHOP NOW</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import "./Products.css"
// import { useSelector, useDispatch} from "react-redux";
// import { fetchProducts } from '../../reduxtoolkit/ProductsSlice';
// import { fetchUnstitchedProducts } from '../../reduxtoolkit/ProductsSlice';


// // import ProductData from '../../data/ProductData';
// import { Link } from 'react-router-dom';
// // import StitchedCategory from '../../data/StitchedCategory';
// import axios from 'axios';

// const Products = () => {
//   const { category } = useParams(); // Use useParams within the component
//   const products = useSelector((state) => state.products.items);
//   // console.log(products)
//   const newProducts = useSelector((state) => state.products.unstitchedItems.unstitched)
//     console.log(newProducts);
//     // Check if newProducts is an array and convert if needed
//     const newProductsArray = Array.isArray(newProducts) ? newProducts : [];
//     // console.log(newProductsArray)
//   const dispatch=useDispatch()
//   // const dispatch=useDispatch();


//   // const [data, setData] = useState([]);

//   useEffect(() => {
//     dispatch(fetchProducts(category)); // Call the action as a function
//   }, [dispatch, category]);
//   useEffect(() => {
//     dispatch(fetchUnstitchedProducts(category)); // Call the action as a function
//   }, [dispatch, category]);
//   const [categorydata] = useState(StitchedCategory);
//   const [data, setData] = useState([]); // Initialize data state
//   const [sortOption, setSortOption] = useState('featured'); // Initialize sort option state
//   // const { category } = useParams();

//   const filteredData = data.filter((item) => item.category === category);
//   setData(filteredData);

//   //  Function to handle sort option change
//    const handleSortChange = (event) => {
//     const selectedOption = event.target.value;
//     setSortOption(selectedOption);

 
//   //  };
//   //admin
// //   const fetchData = async (category) => {
// //     try {
// //       const response = await axios.get(`http://localhost:4000/api/unstitched/${category}`);
// //       setData(response.data.unstitched);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   useEffect(() => {
// //   // Call the fetchData function when the 'category' parameter changes
// //   fetchData(category);
// // }, [category]);

// // const postData = async () => {
// //   try {
// //     // Check if data has already been posted
// //     const hasDataBeenPosted = localStorage.getItem('dataPosted');

// //     if (!hasDataBeenPosted) {
// //       // Data has not been posted, so proceed to post it
// //       const response = await axios.post("http://localhost:4000/api/Products");

// //       if (response) {
// //         console.log('Data POSTed successfully');
// //         alert('Data POSTed successfully');
// //       } else {
// //         console.error('Data POST failed');
// //       }

// //       // Set the flag to indicate that data has been posted
// //       localStorage.setItem('dataPosted', 'true');
// //     } else {
// //       console.log('Data has already been posted, skipping POST.');
// //       // alert('Data has already been posted, skipping POST.');
// //     }
// //   } catch (error) {
// //     console.error('Error:', error);
// //   }
// // };

// // useEffect(() => {
// //   postData();
// // }, []);

// // const postData = async () => {
// //   try {
    
// //       // If data doesn't exist, then post it  
// //       const response = await axios.post("http://localhost:4000/api/Products");

// //       if (response) {
// //         console.log('Data POSTed successfully');
// //         alert("Data POSTed successfully");
// //       } else {
// //         console.error('Data POST failed');
// //       }
// //     } 
    
// //    catch (error) {
// //     console.error('Error:', error);
// //   }
// // };

// // useEffect(() => {

// //     postData();
    
  
// // }, []);



// const filteredData = data.filter((item) => item.category === category);

// if (sortOption === 'lowToHigh') {
//   filteredData.sort((a, b) => parseFloat(a.price.replace("PKR ", "")) - parseFloat(b.price.replace("PKR ", "")));
// } else if (sortOption === 'highToLow') {
//   filteredData.sort((a, b) => parseFloat(b.price.replace("PKR ", "")) - parseFloat(a.price.replace("PKR ", "")));
// }


//   return (
//     <div style={{ paddingTop: '18vh' }}>
//        <h5 className='text-center w-bold mt-3'>{category}</h5>
//       <div>    <div className="sorting-sec filter d-flex align-items-center justify-content-end">
//           <p className=" mt-3 px-3"><b>Sort By</b></p>
//           <select
//             className="select-filter border border-bottom  w-md-auto mb-2 "
//             style={{ fontSize: "14px", marginRight: "32px" }}
//             name=""
//             id=""
//             value={sortOption}
//             onChange={handleSortChange}
//           >
//             <option value="featured">Featured</option>
//             <option value="lowToHigh">Price : Low To High</option>
//             <option value="highToLow">Price : High To Low</option>
//           </select>
//         </div></div>
//       {/* Category Section */}
//        {/* <div className="category-section">
//         <div className="category-section-inner">
//           <div className=''><h5 className='mt-3 mx-2'>Shopping Options</h5></div>
//           {categorydata.map((item) => (
//             <div className="dropdown mx-2" key={item.category}>
//               <hr />
//               <span className="d-flex justify-content-between" data-bs-toggle="dropdown">
//                 {item.category}<i className="fa-solid fa-angle-down "></i>
//               </span>
//               <ul className="dropdown-menu w-auto w-md-auto" style={{ fontSize: "14px" }}>
//                 <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata1}</a></div>
//                 <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata2} </a></div>
//                 <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata3}</a></div>
//                 <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata4}</a></div>
//                 <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata5}</a></div>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>  */}
//       {/* Cards */}
//       <div className="sort">
  
//         <div className='d-flex flex-wrap justify-content-around '>
//         {[...products, ...newProductsArray].map((item) => (
//   <div className="card border-0 gap-4 card-container" style={{ width: "17rem" }} key={item.id}>
//     <Link to={`${item.id}`}>
//       <img src={item.image} className="card-img-top" alt="..." />
//     </Link>
//     <div className="card-body">
//       <p className="card-title">{item.title}</p>
//       <h6 className="card-text fw-bold text-danger">{item.price}</h6>
//       <Link to={`${item.id}`}>
//         <button type="button" className="btn btn-outline-dark">SHOP NOW</button>
//       </Link>
//     </div>
//   </div>
// ))}


//         </div>
//       </div>
//     </div>
   
   
//   );
// };

// export default Products;


// Function to fetch data based on the selected category
//  const fetchData = async (selectedCategory) => {
//   try {
//     const response = await axios.get(`http://localhost:4000/api/Products/${selectedCategory}`);
//     alert("get sucessfully")
//     setData(response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// useEffect(() => {
//   // Call the fetchData function when the 'category' parameter changes
//   fetchData(category);
// }, [category]);



//post data
// const postData = async () => {
//   try {
//     // Check if data already exists in MongoDB before posting
//     const checkResponse = await axios.get("http://localhost:4000/api/Products/");
    
//     if (checkResponse.data.length === 0) {
//       // If data doesn't exist, then post it
//       const response = await axios.post("http://localhost:4000/api/Products/");

//       if (response) {
//         console.log('Data POSTed successfully');
//         alert("Data POSTed successfully");
//       } else {
//         console.error('Data POST failed');
//       }
//     } else {
//       console.log('Data already exists in MongoDB, skipping POST.');
//       alert('Data already exists in MongoDB, skipping POST.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// useEffect(() => {
 
// postData();
//     }, []);

// const postData = async () => {
//   try {
    
//       // If data doesn't exist, then post it  
//       const response = await axios.post("http://localhost:4000/api/Products");

//       if (response) {
//         console.log('Data POSTed successfully');
//         alert("Data POSTed successfully");
//       } else {
//         console.error('Data POST failed');
//       }
//     } 
    
//    catch (error) {
//     console.error('Error:', error);
//   }
// };

// useEffect(() => {

//     postData();
    
  
// }, []);