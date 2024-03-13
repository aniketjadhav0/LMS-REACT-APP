import React, { useState } from 'react'
import { createRecord } from '../appwrite/database';
import { Modal, Button } from 'react-bootstrap';

export default function AddRecord() {
    const [stdName, setStdName] = useState("");
    const [enr, setEnr] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [course, setCourse] = useState("");
    const [sem, setSem] = useState("");

    const [errorString, setErrorString] = useState("");
    const [error, setError] = useState(false);

    const addRecord = () => {
        if (stdName !== "" && enr !== "" && mob !== "" && sem !== "" && course !== "" && email !== "") {
            createRecord(stdName, enr, email, mob, course, sem, (e) => setErrorString(e))
        } else {
            setErrorString("Please fill all the fields !");
            setError(true)
        }
        if (errorString === "")
            setError(true)
    }
    const reset = () => {
        setStdName("")
        setEnr("")
        setEmail("")
        setMob("")
        setSem('')
        setCourse("")
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = function(event) {
            const csvData = event.target.result;
            const rows = csvData.split('\n');
            const dataArray = [];
    
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i].trim();
                if (row !== '') {
                    const columns = row.split(',');
                    dataArray.push(columns);
                }
            }
    
            // console.log(dataArray); // Output the array of arrays representing CSV data
            for (var a = 0; a < dataArray.length; a++){
                console.log(dataArray[a])
                createRecord(dataArray[a][0],
                dataArray[a][1],
                dataArray[a][2],
                dataArray[a][3],
                dataArray[a][4],
                dataArray[a][5],
                )
            }

        };
    
        reader.readAsText(file);
    }
    
    // Example usage: Attach this function to a file input field's onChange event
    // <input type="file" onChange={handleFileUpload} />
    
    return (
        <main className="mt-1 pt-3">
            <div className="container-fluid">


                <div className="row dashboard-counts">
                    <div className="col-md-12">
                        <h4 className="fw-bold text-uppercase"> Add Student </h4>

                        <div>
                            <input type="file" onChange={handleFileUpload} className="form-control-file mt-2" />
                        </div>

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
                                                <label for="exampleInputEmail1" className="form-label">
                                                    <i className="fa-solid fa-face-smile"></i>
                                                    Student Name</label>

                                                <input type="text" className="form-control"
                                                    value={stdName}
                                                    onChange={(e) => setStdName(e.target.value)} id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">
                                                    <i className="fa-solid fa-id-card"></i>
                                                    Enrollment Number</label>

                                                <input type="text" className="form-control" id="exampleInputPassword1" value={enr}
                                                    onChange={(e) => setEnr(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">
                                                    <i className="fa-solid fa-envelope"></i> Email Address
                                                </label>

                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">
                                                    <i className="fa-solid fa-phone"></i>
                                                    Phone Number</label>

                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                    value={mob}
                                                    onChange={(e) => setMob(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">Course</label>

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

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">Semester</label>

                                                <select className="form-control"
                                                    value={sem} onChange={(e) => { setSem(e.target.value) }}>
                                                    <option value=""> Select Semester </option>
                                                    <option value="First"> First Semester </option>
                                                    <option value="Second"> Second Semester</option>
                                                    <option value="Third"> Third Semester</option>
                                                    <option value="Fourth"> Fourth Semester</option>
                                                    <option value="Fifth"> Fifth Semester</option>
                                                    <option value="Sixth"> Sixth Semester </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" onClick={addRecord} className="btn btn-success me-2">Publish</button>
                                            <button type="reset" onClick={reset} className="btn btn-secondary">Cancel</button>
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
