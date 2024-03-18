import React, { useEffect, useState } from 'react'
import { listBooks, listIssued, listRecord, listReturned } from '../appwrite/database';

export default function Dashboard() {
    // eslint-disable-next-line
    const [books, setBooks] = useState(0)
    const [record, setREcord] = useState(0)
    const [Issued, setIssued] = useState(0);
    const [returnbook, setReturnbook] = useState(0)

    useEffect(() => {
        listBooks(res => setBooks(res.documents))
        listRecord(res => setREcord(res))
        listIssued(res => setIssued(res))
        listReturned(res => setReturnbook(res))
        //  console.log(books);
    },[])

    return (
        <>


            <div>




                <main className="mt-1 pt-3">
                    <div className="container-fluid">

                        <div className="row dashboard-counts">
                            <div className="col-md-12">
                                <h4 className="fw-bold text-uppercase" > Dashboard </h4>
                                <p>Statistics of the system!</p>
                            </div>

                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">Total Books</h5>

                                        <h1>{books ? books.length : <div class="spinner-grow" role="status">
                                            <span class="sr-only"></span>
                                        </div>}</h1>

                                        <div className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">Total Students</h5>

                                        <h1>{record ? record.length : <div class="spinner-grow" role="status">
                                            <span class="sr-only"></span>
                                        </div>}</h1>

                                        <div className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">issued Books</h5>

                                        <h1>{Issued ? Issued.length : <div class="spinner-grow" role="status">
                                            <span class="sr-only"></span>
                                        </div>}</h1>

                                        <div className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card" >
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase text-muted">Return Books</h5>

                                        <h1>{returnbook ? returnbook.length : <div class="spinner-grow" role="status">
                                            <span class="sr-only"></span>
                                        </div>}</h1>

                                        <div className="card-link link-underline-light">View More</div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row mt-5 dashboard-tabs" >
                            <div className="col-md-12">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link text-uppercase active" id="new-students" data-bs-toggle="tab" data-bs-target="#new-students-pane" type="button" role="tab" aria-controls="new-students-pane" aria-selected="true">
                                            New Books
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
                                                    <th scope="col">Book Name</th>
                                                    <th scope="col">Book Number</th>
                                                    <th scope="col">ISBN NO</th>
                                                    <th scope="col">PUB NO</th>
                                                    <th scope="col">AUTHOR NAME</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    books && books.map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item["book-name"]}</td>
                                                                <td>{item["book-number"]}</td>
                                                                <td>{item["ISBN-number"]}</td>
                                                                <td>{item["publisher-name"]}</td>
                                                                <td>{item["author-name"]}</td>
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
                                                                <td>{item["Issued-date"]}</td>
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
                                                    <th scope="col">Book Number</th>
                                                    <th scope="col">Student Name</th>
                                                    <th scope="col">Issued Date</th>
                                                    <th scope="col">Return Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {returnbook &&
                                                    returnbook.slice(0,10).map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item["book-name"]}</td>
                                                                <td>{item["book-number"]}</td>
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
