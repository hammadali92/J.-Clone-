import React,{useEffect} from 'react'

// const CastCrew = () => {
//   return (
//     <div>
//       <h1>CastCrew</h1>
//     </div>
//   )
// }

// export default CastCrew


import { useSelector, useDispatch} from "react-redux";
import { fetchData } from "../../redux/actions/product.action";

import { useParams } from 'react-router-dom';



function CastCrew({top}) {
  useEffect(() => {
    window.scrollTo(0, top);
  }, [top]);
  const { category } = useParams(); // Use useParams within the component
  const data = useSelector((state) =>state.data)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchData(category)); // Call the action as a function
  }, [dispatch, category]);
  return (
    <>

  {
    data?.map((item)=>{
      return(
      <h1>{item?.title}</h1>
  
      )
    })
  }

  
    </>
  );
}

export default CastCrew;
