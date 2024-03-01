import React, { useEffect, useState } from 'react'
import { issueBook, listBooks, listRecord } from '../appwrite/database';

export default function IssueBook() {
    const [bookName, setBookName] = useState();
    const [stdName, setStdName] = useState();
    const [idate, setidate] = useState();
    const [rdate, setrdate] = useState()

    const [bookdb, setBookdb] = useState([]);
    const [recordb, setRecordb] = useState();
    useEffect(() => {
        listBooks(res => { setBookdb(res) })
        listRecord(res => setRecordb(res))
        console.log(bookdb, recordb);


    })
    const borrow = () => {
        issueBook(bookName, stdName, idate, rdate)
           

    }
    return (
        <div>

            <main class="mt-1 pt-3">
                <div class="container-fluid">


                    <div class="row dashboard-counts">
                        <div class="col-md-12">
                            <h4 class="fw-bold text-uppercase"> Issue book </h4>
                        </div>
                        <div class="col-md-12">

                            <div class="card">
                                <div class="card-header">
                                    Fill the form
                                </div>
                                <div class="card-body">

                                    <div>
                                        <div class="row">


                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">Select Book</label>

                                                    <select class="form-control" value={bookName} onChange={(e) => setBookName(e.target.value)}>
                                                        <option>select book</option>
                                                        {
                                                            bookdb && bookdb.map(item => <option value={item["book-name"]}>{item["book-name"]}</option>)
                                                        }

                                                    </select>
                                                </div>
                                            </div>



                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">Select Student</label>

                                                    <select class="form-control"
                                                        value={stdName}
                                                        onChange={(e) => setStdName(e.target.value)}
                                                    >
                                                        <option>select student</option>
                                                        {
                                                            recordb && recordb.map(item =>
                                                                 <option value={item["student-name"]}>
                                                                    {item["student-name"]}
                                                                </option>)
                                                        }
                                                        
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label" />
                                                    {/* <!-- icon-->  */}
                                                    <i class="fa-solid fa-id-card" />
                                                    <p>

                                                        Issue Date
                                                    </p>
                                                </div>

                                                <input type="date" class="form-control" id="exampleInputPassword1" value={idate} onChange={(e) => setidate(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">
                                                    {/* <!-- icon--> */}
                                                    <i class="fa-solid fa-id-card"></i>
                                                    Return Date</label>

                                                <input type="date" class="form-control" id="exampleInputPassword1" value={rdate} onChange={(e) => setrdate(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <button type="submit" onClick={borrow} class="btn btn-success">Submit</button>
                                            <button type="reset" class="btn btn-secondary">Cancel</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </main >
        </div >
    )
}
