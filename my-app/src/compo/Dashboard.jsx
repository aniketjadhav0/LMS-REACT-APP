import React from 'react'
import Navbar from './Navbar'

export default function Dashboard() {
    return (
        <>
            <div class="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">


                <div class="offcanvas-body">
                    <ul class="navbar-nav">

                        {/* <!-- This is for add code and Dashboard --> */}

                        <li class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Core</div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./dashboard.html">
                                <i class="fa-solid fa-table-columns me-2"> </i>Dashboard</a>
                        </li>

                        <li class="nav-item my-0">
                            <hr />
                        </li>

                        {/* <!-- end --> */}

                        {/* <!-- This for  Books Management --> */}
                        <li class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Inventory </div>
                        </li>

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
                                            <a href="./add-book.html" class="nav-link ">
                                                <i class="fa-solid fa-plus me-2"></i> Add New
                                            </a>
                                        </li>
                                        <li>
                                            <a href="manage-books.html" class="nav-link ">
                                                <i class="fa-solid fa-list me-2"></i> Manage All
                                            </a>
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
                                            <a href="./add-student.html" class="nav-link ">
                                                <i class="fa-solid fa-plus me-2"></i> Add New
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./manage-student.html" class="nav-link ">
                                                <i class="fa-solid fa-list me-2"></i> Manage All
                                            </a>
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
                                            <a href="./issue-book.html" class="nav-link ">
                                                <i class="fa-solid fa-hand-holding-hand me-2"></i>Issue Books

                                            </a>
                                        </li>
                                        <li>
                                            <a href="manage-issued-books.html./manage-books.html" class="nav-link ">
                                                <i class="fa-solid fa-list-check me-2"></i> Manage Issued Books
                                            </a>
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
                                            <a href="#" class="nav-link ">
                                                <i class="fa-solid fa-arrow-right-arrow-left me-2"></i> Return History
                                            </a>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li class="nav-item my-0">
                            <hr />
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <i class="fa-solid fa-right-from-bracket me-2"></i> Logout</a>
                        </li>

                    </ul>
                </div>
            </div>


            <div>
                <div class="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">


                    <div class="offcanvas-body">
                        <ul class="navbar-nav">


                            <li class="nav-item">
                                <div class="text-secondary small text-uppercase fw-bold"> Core</div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <i class="fa-solid fa-table-columns me-2"> </i>Dashboard</a>
                            </li>

                            <li class="nav-item my-0">
                                <hr />
                            </li>

                            <li class="nav-item">
                                <div class="text-secondary small text-uppercase fw-bold"> Inventory </div>
                            </li>

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
                                                <a href="./add-book.html" class="nav-link ">
                                                    <i class="fa-solid fa-plus me-2"></i> Add New
                                                </a>
                                            </li>
                                            <li>
                                                <a href="manage-books.html" class="nav-link ">
                                                    <i class="fa-solid fa-list me-2"></i> Manage All
                                                </a>
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
                                                <a href="./add-student.html" class="nav-link ">
                                                    <i class="fa-solid fa-plus me-2"></i> Add New
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="nav-link ">
                                                    <i class="fa-solid fa-list me-2"></i> Manage All
                                                </a>
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
                                                <a href="./issue-book.html" class="nav-link ">
                                                    <i class="fa-solid fa-hand-holding-hand me-2"></i>Issue Books

                                                </a>
                                            </li>
                                            <li>
                                                <a href="./manage-issued-books" class="nav-link ">
                                                    <i class="fa-solid fa-list-check me-2"></i> Manage Issued Books
                                                </a>
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
                                                {/* <a href="#" class="nav-link ">
                                                    <i class="fa-solid fa-square-envelope me-2"></i></i>Notification */}

                                                {/* </a> */}
                                            </li>
                                            <li>
                                                <a href="#" class="nav-link ">
                                                    <i class="fa-solid fa-arrow-right-arrow-left me-2"></i> Return History
                                                </a>
                                            </li>



                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li class="nav-item my-0">
                                <hr />
                            </li>

                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">
                                    <i class="fa-solid fa-right-from-bracket me-2"></i>
                                    </i>
                                </a> */}
                            </li>

                        </ul>
                    </div>

                </div>



                <main class="mt-1 pt-3">
                    <div class="container-fluid">

                        <div class="row dashboard-counts">
                            <div class="col-md-12">
                                <h4 class="fw-bold text-uppercase"> Dashboard </h4>
                                <p>Statistics of the system!</p>
                            </div>

                            <div class="col-md-3">
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body text-center">
                                        <h5 class="card-title text-uppercase text-muted">Total Books</h5>

                                        <h1>130</h1>

                                        <a href="#" class="card-link link-underline-light">View More</a>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body text-center">
                                        <h5 class="card-title text-uppercase text-muted">Total Students</h5>

                                        <h1>130</h1>

                                        <a href="#" class="card-link link-underline-light">View More</a>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body text-center">
                                        <h5 class="card-title text-uppercase text-muted">issued Books</h5>

                                        <h1>130</h1>

                                        <a href="#" class="card-link link-underline-light">View More</a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card" >
                                    <div class="card-body text-center">
                                        <h5 class="card-title text-uppercase text-muted">Return Books</h5>

                                        <h1>130</h1>

                                        <a href="#" class="card-link link-underline-light">View More</a>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="row mt-5 dashboard-tabs" >
                            <div class="col-md-12">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-uppercase active" id="new-students" data-bs-toggle="tab" data-bs-target="#new-students-pane" type="button" role="tab" aria-controls="new-students-pane" aria-selected="true">
                                            New Students
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-uppercase" id="recent-issued" data-bs-toggle="tab" data-bs-target="#recent-issued-pane" type="button" role="tab" aria-controls="recent-loans-pane" aria-selected="false">
                                            Recent issued
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-uppercase" id="recent-return" data-bs-toggle="tab" data-bs-target="#recent-return-tab-pane" type="button" role="tab" aria-controls="recent-subscription-pane" aria-selected="false">
                                            Recent Return
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="new-students-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <table class="table">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Preparing for</th>
                                                    <th scope="col">Registered on</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-success">Active</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-success">Active</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-danger">Inactive</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-success">Active</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="tab-pane fade" id="recent-issued-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                        <table class="table">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Book Name</th>
                                                    <th scope="col">Issued Date</th>
                                                    <th scope="col">Return Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        01-02-2024, 12:20 PM
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        01-02-2024, 12:20 PM
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        01-02-2024, 12:20 PM
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        01-02-2024, 12:20 PM
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                    <div class="tab-pane fade" id="recent-return-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                        <table class="table">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Return On</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-warning">Returned</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-success">Active</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-danger">Returned</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span class="badge text-bg-success">Active</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        </>
    )
}
