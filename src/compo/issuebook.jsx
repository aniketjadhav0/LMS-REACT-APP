import React, { useEffect, useState } from 'react'
import { issueBook, listBooks, listRecord } from '../appwrite/database';
import { Modal, Button } from 'react-bootstrap';


export default function IssueBook() {
    const [bookName, setBookName] = useState();
    const [stdName, setStdName] = useState();
    const [idate, setidate] = useState();
    const [rdate, setrdate] = useState()

    const [bookdb, setBookdb] = useState([]);
    const [recordb, setRecordb] = useState();

    const [error, setError] = useState(false);
    const [errorString, setString] = useState("");

    useEffect(() => {
        listBooks(res => { setBookdb(res.documents) })
        listRecord(res => setRecordb(res))
        console.log(bookdb, recordb);


    })

    const reset = () => {
        setBookName("")
        setStdName("")
        setidate("")
        setrdate("")
    }
    const borrow = () => {
        if (bookName === "" || stdName === "" || idate === "" || rdate === "") {
            setError(true)
            setString("Please fill all the fields.")
            return;
        } else {

            issueBook(bookName, stdName, idate, rdate, (e) => setString(e))
        }
       
        // if (bookdb.filter(item => item["book-name"] === bookName && item["book-status"] === "Available").length === 0) {
        //     setError(true)
        //     setString("Book is not available.")
        //     return;
        // }
        // if (recordb.filter(item => item["book-name"] === bookName && item["student-name"] === stdName).length > 0) {
        //     setError(true)
        //     setString("Book is already issued to this student.")
        //     return;
        // }


        if (errorString === "")
            setString("Book is issued successfully.")
        setError(true)
        reset()

    }

    return (
        <div>

            <main className="mt-1 pt-3">
                <div className="container-fluid">


                    <div className="row dashboard-counts">
                        <div className="col-md-12">
                            <h4 className="fw-bold text-uppercase"> Issue book </h4>
                        </div>
                        <div className="col-md-12">

                            <div className="card">
                                <div className="card-header">
                                    Fill the form
                                    <Modal show={error} onHide={() => setError(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{errorString === "" ? "Success" : "Failed"} </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>Your operation was {errorString === "" ? "Successfull." : " Failed !"}</p>
                                            <p>{errorString}</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={() => setError(false)}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <div className="card-body">

                                    <div>
                                        <div className="row">


                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label">Select Book</label>

                                                    <select className="form-control" value={bookName} onChange={(e) => setBookName(e.target.value)}>
                                                        <option>select book</option>
                                                        {
                                                            bookdb && bookdb.map(item => <option value={item["book-name"]}>{item["book-name"]}</option>)
                                                        }

                                                    </select>
                                                </div>
                                            </div>



                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label">Select Student</label>

                                                    <select className="form-control"
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

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label" />
                                                    {/* <!-- icon-->  */}
                                                    <i className="fa-solid fa-id-card" />
                                                    <p>

                                                        Issue Date
                                                    </p>
                                                </div>

                                                <input type="date" className="form-control" id="exampleInputPassword1" value={idate} onChange={(e) => setidate(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">
                                                    {/* <!-- icon--> */}
                                                    <i className="fa-solid fa-id-card"></i>
                                                    Return Date</label>

                                                <input type="date" className="form-control" id="exampleInputPassword1" value={rdate} onChange={(e) => setrdate(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" onClick={borrow} className="btn btn-success">Submit</button>
                                            <button type="reset" onClick={reset} className="btn btn-secondary">Cancel</button>
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
