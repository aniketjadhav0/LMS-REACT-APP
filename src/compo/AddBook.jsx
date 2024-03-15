import React from 'react'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { createBook } from '../appwrite/database';

export default function AddBook() {
    const [bookName, setBookName] = useState("");
    const [isbn, setisbn] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [PubName, setPubName] = useState("");
    const [course, setCourse] = useState("df");
    const [sem, setSem] = useState("");

    const [errorString, setString] = useState("");
    const [error, setError] = useState(false);


    const reset = () => {
        setBookName("")
        setisbn("")
        setAuthorName("")
        setPubName("")
        setCourse("")
        setSem("")

    }
    const addBook = () => {
        if (bookName !== "" && isbn !== "" && PubName !== "" && course !== "" && sem !== "" && authorName !== "") {
            createBook(bookName, isbn, authorName, PubName, course, sem, (e) => {setString(e); setError(true)})
        } else {
            setString("Please fill all the fields")
            setError(true);
        }
        if (errorString === "") {
            setError(true)
            setString("Operation Success")
        }

    }
    return (
        <main className="mt-1 pt-3">
            <div className="container-fluid">


                <div className="row dashboard-counts">
                    <div className="col-md-12">
                        <h4 className="fw-bold text-uppercase"> Add Book </h4>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Fill the form
                                <Modal show={error} onHide={() => setError(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{errorString } </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>{errorString==="Please fill all the fields" ? "Fill the fields":"Operation is done"}</p>
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
                                                <label for="exampleInputEmail1"
                                                    className="form-label">Book Name</label>

                                                <input type="text"
                                                    className="form-control"
                                                    value={bookName}
                                                    onChange={(e) => setBookName(e.target.value)}
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1"
                                                    className="form-label">Book Number</label>

                                                <input type="text"
                                                    className="form-control"
                                                    value={sem}
                                                    onChange={(e) => setSem(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1"
                                                    className="form-label">ISBN Number</label>

                                                <input type="text"
                                                    className="form-control"
                                                    value={isbn}
                                                    onChange={(e) => setisbn(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1"
                                                    className="form-label">Author Name</label>

                                                <input type="text"
                                                    className="form-control"
                                                    value={authorName}
                                                    onChange={(e) => setAuthorName(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1"
                                                    className="form-label">Publisher Name</label>

                                                <input type="text"
                                                    className="form-control"
                                                    value={PubName}
                                                    onChange={(e) => setPubName(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1"
                                                    className="form-label">Course</label>

                                                <select className="form-control"
                                                    value={course}
                                                    onChange={(e) => {
                                                        setCourse(e.target.value)
                                                        console.log(e.target);
                                                    }}
                                                >
                                                    <option value=""> Please select </option>
                                                    <option value="Computer Engineering"> Computer Engineering </option>
                                                    <option value="Civil Engineering"> Civil Engineering</option>
                                                    <option value="Printing Engineering"> Printing Engineering</option>
                                                    <option value="Electronics Engineerig"> Electronics Engineering</option>
                                                    <option value="Electrical Engineering"> Electrical Engineering</option>
                                                    <option value="Mechanical Engineering"> Mechanical Engineering </option>
                                                </select>
                                            </div>
                                        </div>

                                        

                                        <div className="col-md-12">
                                            <button onClick={addBook} type="submit" className="btn btn-success me-2">Publish </button>
                                            <button onClick={reset} className="btn btn-secondary">Cancel</button>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main >
    )
}
