import React,{useEffect,useState} from 'react'
import { useParams}  from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminProducts from '../../components/AdminProducts';
import { toast } from 'react-toastify';
import {useDispatch, useSelector } from 'react-redux';
import { fetchUnstitchedProducts } from '../../reduxtoolkit/ProductsSlice';
const ProductsDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  
    const handleNavigationClick = (component) => {
      setActiveComponent(component);
    };
    const { category } = useParams();
    const {id} = useParams();
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchUnstitchedProducts(category)); // Call the action as a function
      }, [dispatch, category]);
    const newProducts = useSelector((state) => state.products.unstitchedItems.unstitched)
    console.log(newProducts);
    // Check if newProducts is an array and convert if needed
    const newProductsArray = Array.isArray(newProducts) ? newProducts : [];

    const deleteData = async(id)=>{
try{
    await axios.delete(`http://localhost:4000/api/unstitched/${id}`);
    toast.success('Product deleted successfully!');
    dispatch(fetchUnstitchedProducts(category));
} catch(error){
console.log(error)
}
    }
    // const updateData = async(id)=>{
    //   try{
    //       await axios.put(`http://localhost:4000/api/unstitched/${id}`)
    //   } catch(error){
    //   console.log(error)
    //   }
    //       }
  return (
    <div>
     <marquee className="textt" behavior="scroll" direction="right" scrollamount="9">
        J. Junaid Jamshed Products
      </marquee>
        <h3 className='text-center fw-light mt-4'>{category}</h3>
        
     <div className='d-flex flex-wrap justify-content-around mt-4 '>
        {newProductsArray?.map((item) => (
  <div className="card border-0 gap-4" style={{ width: "17rem" }} key={item.id}>
   
      <img src={item.image} className="card-img-top" alt="..." />
  
    <div className="card-body">
      <p className="card-title">{item.title}</p>
      <h6 className="card-text fw-bold text-danger">{item.price}</h6>
    {console.log(item._id)}
        <button type="button" className="btn btn-outline-dark" onClick={()=>{deleteData(item._id)}}>DELETE</button>
    <Link to={`/UpdateProduct/${item._id}`}>  <button type="button" className="btn btn-outline-danger" >UPDATE</button></Link>  
  
    </div>
  </div>
))}


        </div>
    </div>
  )
}

export default ProductsDashboard
