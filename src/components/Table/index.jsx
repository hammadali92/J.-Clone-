import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/user');
      setData(response.data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className=" text-center fw-light  py-2" style={{backgroundColor:"#D5DBDB"}}>
        <h3>USER DATA</h3>
      </div>
      <table className="table table-bordered table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Table = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/user');
//       setData(response.data.users);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
// console.log(data)
//   return (
//     <div>
//         <div className=" container pt-2 lead-text text-center fw-light">
//             <h3>USER DATA</h3>
//         </div>
//       <table className="table">
//         <thead>
//           <tr>
            
           
//             <th scope="col">Email</th>
//             <th scope="col">Password</th>
          
//           </tr>
//         </thead>
//         {data?.map((item)=>{
//         return (
//              <tbody>
//                 <tr>
          
//                 <td>{item.email}</td>
//                 <td>{item.password}</td>
             
//                 </tr>
//         </tbody>
//         )
//     })}
       
//       </table>
//     </div>
//   );
// };

// export default Table;
