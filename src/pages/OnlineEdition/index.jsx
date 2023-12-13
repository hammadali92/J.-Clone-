import React, { useState } from 'react';
import './OnlineEdition.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BeTheFirst from '../../components/BeTheFirst';
import OnlineEditionData from '../../data/OnlineEditionData';
import KameezCategory from '../../data/KameezCategory';

const OnlineEdition = () => {
  const [data, setData] = useState(OnlineEditionData);
  const [categorydata] = useState(KameezCategory);
  const [sortOption, setSortOption] = useState('');




  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    if (selectedOption === 'featured') {
      setData([...OnlineEditionData]);
    } else if (selectedOption === 'lowToHigh') {
      setData([...data].sort((a, b) => parseFloat(a.price.replace("PKR ", "")) - parseFloat(b.price.replace("PKR ", ""))));
    } else if (selectedOption === 'highToLow') {
      setData([...data].sort((a, b) => parseFloat(b.price.replace("PKR ", "")) - parseFloat(a.price.replace("PKR ", ""))));
    }
  };

  return (
    <>
      <Navbar />
      <h5 className='text-center fw-medium mt-3'>ONLINE EDITION</h5>
<div className="main-section">
  {/* Category Section   */}
        <div className="category-section ">
          <div className="category-section-inner">
            <div className=''><h5 className='mt-3 mx-2'>Shopping Options</h5></div>
            {categorydata.map((item) => (
              <div className="dropdown mx-2" key={item.category}>
                <hr />
                <span className="d-flex justify-content-between" data-bs-toggle="dropdown">
                  {item.category}<i className="fa-solid fa-angle-down "></i>
                </span>
                <ul className="dropdown-menu w-auto w-md-auto" style={{ fontSize: "14px" }}>
                  <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata1}</a></div>
                  <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata2} </a></div>
                  <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata3}</a></div>
                  <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata4}</a></div>
                  <div><a className="dropdown-item" href="#"><input type="radio" /> {item.categorydata5}</a></div>
                </ul>
              </div>
            ))}
          </div>
        </div>
{/* Sort  */}
        <div className="sort">
          <div className="sorting-sec filter d-flex align-items-center justify-content-end">
            <p className=" mt-3 px-3"><b>Sort By</b></p>
            <select
              className="select-filter border border-bottom  w-md-auto mb-2 "
              style={{ fontSize: "14px", marginRight:"32px" }}
              name=""
              id=""
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="featured">Featured</option>
              <option value="lowToHigh">Price : Low To High</option>
              <option value="highToLow">Price : High To Low</option>
            </select>
          </div>
          <div className='d-flex flex-wrap justify-content-around '>
            {data.map((item) => (
              <div className="card border-0 gap-4 " style={{ width: "17rem" }} key={item.id}>
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
      </div>

      <BeTheFirst />
      <Footer />
    </>
  );
}

export default OnlineEdition;
