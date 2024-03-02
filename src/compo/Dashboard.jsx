import React, { useEffect, useState } from 'react'
import { listBooks, listIssued, listRecord, listReturned } from '../appwrite/database';

export default function Dashboard() {
    const [books, setBooks] = useState(0)
    const [record, setREcord] = useState(0)
    const [Issued, setIssued] = useState(0);
    const [returnbook, setReturnbook] = useState(0)

    useEffect(() => {
        listBooks(res => setBooks(res))
        listRecord(res => setREcord(res))
        listIssued(res => setIssued(res))
        listReturned(res => setReturnbook(res))
        console.log(books);
    })
    return (
        <>


            <div>
                <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">


                    <div className="offcanvas-body">
                        <ul className="navbar-nav">


                            <li className="nav-item">
                                <div className="text-secondary small text-uppercase fw-bold"> Core</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link active" aria-current="page"  >
                                    <i className="fa-solid fa-table-columns me-2"> </i>Dashboard</div>
                            </li>

                            <li className="nav-item my-0">
                                <hr />
                            </li>

                            <li className="nav-item">
                                <div className="text-secondary small text-uppercase fw-bold"> Inventory </div>
                            </li>

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
                                                <div  className="nav-link ">
                                                    <i className="fa-solid fa-plus me-2"></i> Add New
                                                </div>
                                            </li>
                                            <li>
                                                <div  className="nav-link ">
                                                    <i className="fa-solid fa-list me-2"></i> Manage All
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">

                                <div className="nav-link sidebar-link " data-bs-toggle="collapse" 
                                    aria-expanded="false" aria-controls="studentMGMT">
                                    <i className="fa-solid fa-users me-1"></i> Students Management
                                    <span className="right-icon float-end"> <i className="fa-solid fa-chevron-down "></i></span>
                                </div>

                                <div className="collapse" id="studentMGMT">
                                    <div>
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <div  className="nav-link ">
                                                    <i className="fa-solid fa-plus me-2"></i> Add New
                                                </div>
                                            </li>
                                            <li>
                                                <div   className="nav-link ">
                                                    <i className="fa-solid fa-list me-2"></i> Manage All
                                                </div>
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
                                                <div   className="nav-link ">
                                                    <i className="fa-solid fa-hand-holding-hand me-2"></i>Issue Books

                                                </div>
                                            </li>
                                            <li>
                                                <div   className="nav-link ">
                                                    <i className="fa-solid fa-list-check me-2"></i> Manage Issued Books
                                                </div>
                                            </li>



                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link sidebar-link " data-bs-toggle="collapse" href="#ReturnMGMT" role="button"
                                    aria-expanded="false" aria-controls="ReturnMGMT">
                                    <i className="fa-solid fa-right-left me-2"></i> Return Books
                                    <span className="right-icon float-end"> <i className="fa-solid fa-chevron-down "></i></span>
                                </div>

                                <div className="collapse" id="ReturnMGMT">
                                    <div>
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                {/* <div   className="nav-link ">
                                                    <i className="fa-solid fa-square-envelope me-2"></i></i>Notification */}

                                                {/* </div> */}
                                            </li>
                                            <li>
                                                <div   className="nav-link ">
                                                    <i className="fa-solid fa-arrow-right-arrow-left me-2"></i> Return History
                                                </div>
                                            </li>



                                        </ul>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item my-0">
                                <hr />
                            </li>

                            <li className="nav-item">
                                {/* <div className="nav-link active" aria-current="page"  >
                                    <i className="fa-solid fa-right-from-bracket me-2"></i>
                                    </i>
                                </div> */}
                            </li>

                        </ul>
                    </div>

                </div>



                <main className="mt-1 pt-3">
                    <div className="container-fluid">

                        <div className="row dashboard-counts">
                            <div className="col-md-12">
                                <h4 className="fw-bold text-uppercase"> Dashboard </h4>
                                <p>Statistics of the system!</p>
                            </div>

                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">Total Books</h5>

                                        <h1>{books && books.length}</h1>

                                        <div   className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">Total Students</h5>

                                        <h1>{record && record.length}</h1>

                                        <div   className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">issued Books</h5>

                                        <h1>{Issued && Issued.length}</h1>

                                        <div   className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card" >
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">Return Books</h5>

                                        <h1>{returnbook && returnbook.length}</h1>

                                        <div   className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row mt-5 dashboard-tabs" >
                            <div className="col-md-12">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link text-uppercase active" id="new-students" data-bs-toggle="tab" data-bs-target="#new-students-pane" type="button" role="tab" aria-controls="new-students-pane" aria-selected="true">
                                            New Students
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link text-uppercase" id="recent-issued" data-bs-toggle="tab" data-bs-target="#recent-issued-pane" type="button" role="tab" aria-controls="recent-loans-pane" aria-selected="false">
                                            Recent issued
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link text-uppercase" id="recent-return" data-bs-toggle="tab" data-bs-target="#recent-return-tab-pane" type="button" role="tab" aria-controls="recent-subscription-pane" aria-selected="false">
                                            Recent Return
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="new-students-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <table className="table">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Preparing for</th>
                                                    <th scope="col">Registered on</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    // books && books.map((item, index) => {
                                                    //     return (
                                                    //         <tr>
                                                    //             <th scope="row">{index + 1}</th>
                                                    //             <td>{item["book-name"]}</td>
                                                    //             <td>{item["ISBN-number"]}</td>
                                                    //             <td>{item["publisher-name"]}</td>
                                                    //             <td>{item["author-name"]}</td>
                                                    //             <td>
                                                    //                 <span className="badge text-bg-success">Active</span>
                                                    //             </td>
                                                    //         </tr>
                                                    //     )
                                                    // })
                                                }
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Aniket</td>
                                                    <td>CM</td>
                                                    <td>01-02-2024, 12:20 PM</td>
                                                    <td>
                                                        <span className="badge text-bg-success">Active</span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="tab-pane fade" id="recent-issued-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                        <table className="table">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Book Name</th>
                                                    <th scope="col">Issued Date</th>
                                                    <th scope="col">Return Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    Issued && Issued.map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item["student-name"]}</td>
                                                                <td>{item["book-name"]}</td>
                                                                <td>{item["issued-date"]}</td>
                                                                <td>{item["return-date"]}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                    </div>

                                    <div className="tab-pane fade" id="recent-return-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                        <table className="table">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Book Name</th>
                                                    <th scope="col">Student Name</th>
                                                    <th scope="col">Issued Date</th>
                                                    <th scope="col">Return Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {returnbook &&
                                                    returnbook.map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item["book-name"]}</td>
                                                                <td>{item["student-name"]}</td>
                                                                <td>{item["issued-date"]}</td>
                                                                <td>{item["return-date"]}</td>
                                                                <td>
                                                                    <span className="badge text-bg-success">Active</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

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
