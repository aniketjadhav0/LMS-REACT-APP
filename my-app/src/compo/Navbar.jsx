import React from 'react'
import { Link } from 'react-router-dom'
import { logoutf } from '../appwrite/appwrite';

export default function Navbar() {
    const logout = ()=>{
        logoutf();
    }
  return (
    <nav class="navbar  navbar-dark bg-dark">
    <div class="container-fluid">
 
        <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon"></span>
        </button>

 
        <a class="navbar-brand fw-bold text-uppercase me-auto" href=" ">GP BEED</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex ms-auto " role="search">
                <div class="input-group my-3 my-lg-0 ">
                    <input type="text" class="form-control" placeholder="Search..."
                        aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary btn-primary text-white " type="button"
                        id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

            <ul class="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img src="./assets/images/user.jpg " style={{width:"3%"}} class="user-icon" alt=""/>
                        Admin
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end ">
                        <li><a class="dropdown-item" href="#">My Profile</a></li>
                        <li><a class="dropdown-item" href="#">Change Password</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>

     <div class="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">


                <div class="offcanvas-body">
                    <ul class="navbar-nav">

                        {/* <!-- This is for add code and Dashboard --> */}

                        <li class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Core</div>
                        </li>

                        <Link to={"/dashboard"} class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./dashboard.html">
                                <i class="fa-solid fa-table-columns me-2"> </i>Dashboard</a>
                        </Link>

                        <li class="nav-item my-0">
                            <hr />
                        </li>

                        {/* <!-- end --> */}

                        {/* <!-- This for  Books Management --> */}
                        <Link to={""} class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Inventory </div>
                        </Link>

                        <li class="nav-item">

                            <a class="nav-link sidebar-link " data-bs-toggle="collapse" href="#booksMgmt" role="button"
                                aria-expanded="false" aria-controls="booksMgmt">
                                <i class="fa-solid fa-book me-1"></i> Books Management
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </a>

                            <div class="collapse" id="booksMgmt">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addbook"} class="nav-link ">
                                                <i class="fa-solid fa-plus me-2"></i> Add New
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-books"} class="nav-link ">
                                                <i class="fa-solid fa-list me-2"></i> Manage All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>



                        <li class="nav-item">

                            <a class="nav-link sidebar-link " data-bs-toggle="collapse" href="#studentMGMT" role="button"
                                aria-expanded="false" aria-controls="studentMGMT">
                                <i class="fa-solid fa-users me-1"></i> Students Management
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </a>

                            <div class="collapse" id="studentMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addrecord"} class="nav-link ">
                                                <i class="fa-solid fa-plus me-2"></i> Add New
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-record"} class="nav-link ">
                                                <i class="fa-solid fa-list me-2"></i> Manage All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>




                        <li class="nav-item my-0">
                            <hr />
                        </li>


                        <li class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Action </div>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link sidebar-link " data-bs-toggle="collapse" href="#issuedMGMT" role="button"
                                aria-expanded="false" aria-controls="issuedMGMT">
                                <i class="fa-solid fa-book-open me-1"></i> Provide Books
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </a>

                            <div class="collapse" id="issuedMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/issue-book"} class="nav-link ">
                                                <i class="fa-solid fa-hand-holding-hand me-2"></i>Issue Books

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-issue-Book"} class="nav-link ">
                                                <i class="fa-solid fa-list-check me-2"></i> Manage Issued Books
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link sidebar-link " data-bs-toggle="collapse" href="#ReturnMGMT" role="button"
                                aria-expanded="false" aria-controls="ReturnMGMT">
                                <i class="fa-solid fa-right-left me-2"></i> Return Books
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </a>

                            <div class="collapse" id="ReturnMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <a href="#" class="nav-link ">
                                                <i class="fa-solid fa-square-envelope me-2">
                                                </i>Notification

                                            </a>
                                        </li>
                                        <li>
                                            <Link to={"/return-history"}  class="nav-link ">
                                                <i class="fa-solid fa-arrow-right-arrow-left me-2"></i> Return History
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li class="nav-item my-0">
                            <hr />
                        </li>

                        <li class="nav-item" onClick={logout}>
                            <a class="nav-link active" aria-current="page" href="#">
                                <i class="fa-solid fa-right-from-bracket me-2"></i> Logout</a>
                        </li>

                    </ul>
                </div>
            </div>

</nav>
  )
}
