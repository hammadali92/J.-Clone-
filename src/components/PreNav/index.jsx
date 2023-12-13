import React from 'react'
import { Link } from 'react-router-dom'
const PreNav = () => {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
       <Link to="/MainPage" class="fw-bold text-dark text-decoration-none">WELCOME TO J.</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item d-flex">
              <Link to="/RegisterPage" class="nav-link active fw-light" aria-current="page" href="#">SIGN IN</Link>
              <a href=""><img className='mt-3' style={{height:"16px"}} src="https://www.junaidjamshed.com/static/version1692961333/frontend/Rltsquare/junaidjamshed/en_US/Magento_Theme/images/pak-flag.png" alt="" /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-light" href="#">TRACKING INFO</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle fw-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PKR
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">AUD</a></li>
                <li><a class="dropdown-item" href="#">GBP</a></li>
                <li><a class="dropdown-item" href="#">EUR</a></li>
                <li><a class="dropdown-item" href="#">INR</a></li>
              </ul>
            </li>
          </ul>
  
          <div class="d-flex p-1">
            <a href="#"><i class="fas fa-shopping-bag text-black"></i></a>
            <a href="#"><i class="fas fa-search mx-3 text-black"></i></a>
            <a class="text-black text-decoration-none fw-bold" href="#">SEARCH</a>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default PreNav
