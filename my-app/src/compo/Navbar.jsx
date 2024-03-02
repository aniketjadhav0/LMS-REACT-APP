import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logoutf } from '../appwrite/appwrite';

export default function Navbar() {
    const cookieArray = document.cookie.split(';');
    const myCookie = cookieArray.find((cookie) => cookie.includes('isUser'));
    // Extract the value of the cookie
    const myCookieValue = myCookie ? myCookie.split('=')[1].trim() : null;

    const location = useLocation();

    console.log('Cookie Value:', myCookieValue);
    if (myCookieValue !== "true" && window.location.href !== "/") {
        // window.location.href = "/"
        console.log(location.pathname);
    }
    const logout = () => {
        logoutf();
    }
     
    return (
        <nav className="navbar  navbar-dark bg-dark">
            <div className="container-fluid">

                <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="navbar-brand fw-bold text-uppercase me-auto" >GP BEED</div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto " role="search">
                        <div className="input-group my-3 my-lg-0 ">
                            <input type="text" className="form-control" placeholder="Search..."
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary btn-primary text-white " type="button"
                                id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>

                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="./assets/images/user.jpg " style={{ width: "3%" }} className="user-icon" alt="" />
                                Admin
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end ">
                                <li><div className="dropdown-item" >My Profile</div></li>
                                <li><div className="dropdown-item" >Change Password</div></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><div className="dropdown-item" >Logout</div></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="offcanvas offcanvas-left bg-dark text-white  " tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">


                <div className="offcanvas-body">
                    <ul className="navbar-nav">

                        {/* <!-- This is for add code and Dashboard --> */}

                        <li className="nav-item">
                            <div className="text-secondary small text-uppercase fw-bold"> Core</div>
                        </li>

                        <Link to={"/dashboard"} className="nav-item">
                            <div className="nav-link active" aria-current="page" >
                                <i className="fa-solid fa-table-columns me-2"> </i>Dashboard</div>
                        </Link>

                        <li className="nav-item my-0">
                            <hr />
                        </li>

                        {/* <!-- end --> */}

                        {/* <!-- This for  Books Management --> */}
                        <Link to={""} className="nav-item">
                            <div className="text-secondary small text-uppercase fw-bold"> Inventory </div>
                        </Link>

                        <li className="nav-item">

                            <div className="nav-link sidebar-link " data-bs-toggle="collapse"  role="button"
                                aria-expanded="false" aria-controls="booksMgmt">
                                <i className="fa-solid fa-book me-1"></i> Books Management
                                <span className="right-icon float-end"> <i className="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div className="collapse" id="booksMgmt">
                                <div>
                                    <ul className="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addbook"} className="nav-link ">
                                                <i className="fa-solid fa-plus me-2"></i> Add New
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-books"} className="nav-link ">
                                                <i className="fa-solid fa-list me-2"></i> Manage All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>



                        <li className="nav-item">

                            <div className="nav-link sidebar-link " data-bs-toggle="collapse"  role="button"
                                aria-expanded="false" aria-controls="studentMGMT">
                                <i className="fa-solid fa-users me-1"></i> Students Management
                                <span className="right-icon float-end"> <i className="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div className="collapse" id="studentMGMT">
                                <div>
                                    <ul className="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addrecord"} className="nav-link ">
                                                <i className="fa-solid fa-plus me-2"></i> Add New
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-record"} className="nav-link ">
                                                <i className="fa-solid fa-list me-2"></i> Manage All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>




                        <li className="nav-item my-0">
                            <hr />
                        </li>


                        <li className="nav-item">
                            <div className="text-secondary small text-uppercase fw-bold"> Action </div>
                        </li>


                        <li className="nav-item">
                            <div className="nav-link sidebar-link " data-bs-toggle="collapse"  role="button"
                                aria-expanded="false" aria-controls="issuedMGMT">
                                <i className="fa-solid fa-book-open me-1"></i> Provide Books
                                <span className="right-icon float-end"> <i className="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div className="collapse" id="issuedMGMT">
                                <div>
                                    <ul className="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/issue-book"} className="nav-link ">
                                                <i className="fa-solid fa-hand-holding-hand me-2"></i>Issue Books

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-issue-Book"} className="nav-link ">
                                                <i className="fa-solid fa-list-check me-2"></i> Manage Issued Books
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link sidebar-link " data-bs-toggle="collapse"  role="button"
                                aria-expanded="false" aria-controls="ReturnMGMT">
                                <i className="fa-solid fa-right-left me-2"></i> Return Books
                                <span className="right-icon float-end"> <i className="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div className="collapse" id="ReturnMGMT">
                                <div>
                                    <ul className="navbar-nav ps-3">
                                        <li>
                                            <div  className="nav-link ">
                                                <i className="fa-solid fa-square-envelope me-2">
                                                </i>Notification

                                            </div>
                                        </li>
                                        <li>
                                            <Link to={"/return-history"} className="nav-link ">
                                                <i className="fa-solid fa-arrow-right-arrow-left me-2"></i> Return History
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li className="nav-item my-0">
                            <hr />
                        </li>

                        <li className="nav-item" onClick={logout}>
                            <div className="nav-link active" aria-current="page" >
                                <i className="fa-solid fa-right-from-bracket me-2"></i> Logout</div>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>
    )
}
