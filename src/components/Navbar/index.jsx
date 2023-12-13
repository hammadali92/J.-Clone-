import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
// import PreNav from '../PreNav';

const Navbar = () => {
  const Navigate = useNavigate()
  const LogOut =() =>{
    localStorage.removeItem("token");
    Navigate("/")
  }
  return (
    <div class=" bar">
      {/* <PreNav/> */}

          
   

      <div class="text-center">
    <Link to="/MainPage"><img style={{height:" 8vh"}} src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png" alt="" /></Link>
</div>

      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link to="/MainPage" class="fw-bold text-dark text-decoration-none">
            WELCOME TO J.
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#preNavMenu"
            aria-controls="preNavMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="preNavMenu">
            <div class="nav-item d-flex mx-3 logoutt " onClick={LogOut}>
        
                Log Out
         
             
            </div>
            <ul
              class="navbar-nav mx-auto mb-2 mb-lg-0"
              style={{ paddingRight: "40px" }}
            >
              <li class="nav-item ">
                <Link to="/NewArrival" class="nav-link fw-2" role="button">
                  NEW ARRIVALS
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link fw-2"
                  to="/Products/CAST & CREW"
                  role="button"
                >
                  CAST & CREW
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link fw-2" to="/Women" role="button">
                  WOMEN
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link fw-2" to="/Men" role="button">
                  MEN
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link fw-2" to="/BoysGirls" role="button">
                  BOYS & GIRLS
                </Link>
              </li>
              {/* <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            FRAGRANCES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li> */}
            </ul>
            <div class="d-flex p-1">
              <Link to="/CartPage">
                <i class="fas fa-shopping-bag text-black"></i>
              </Link>
              <a href="#">
                <i class="fas fa-search mx-3 text-black"></i>
              </a>
              <a class="text-black text-decoration-none fw-bold" href="#">
                SEARCH
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
