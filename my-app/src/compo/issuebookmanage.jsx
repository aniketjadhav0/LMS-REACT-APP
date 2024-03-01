import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { deleteissued, listIssued, returnbook } from '../appwrite/database';

export default function ManageIssueBook() {

    const [data, setData] = useState();
    const [showModal, setShowModal] = useState(false);
    const [mail, setMail] = useState("I trust this message finds you in good spirits. A friendly reminder that the due date for the book you borrowed from our library has passed. Your prompt return would be greatly appreciated, ensuring all members have timely access. If there are any challenges, feel free to reach out.");
    const [userMail, setUserMail] = useState("");
   

    const handleSendMail = () => setShowModal(true);

    const handleClose = async () => {
        setShowModal(false);
        try {

            await axios.post('http://localhost:3005/send-email', {
                to: userMail,
                text: mail
            });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        listIssued((res) => setData(res));
    })
    const returnBook = (item)=>{
         
        returnbook(item["book-name"],
        item["student-name"],
        item["issued-date"],
        item["return-date"],
         item.$id);
        
    }
    return (
        <div>
            <main class="mt-1 pt-3">
                <div class="container-fluid">


                    <div class="row dashboard-counts">
                        <div class="col-md-12">
                            <h4 class="fw-bold text-uppercase"> Manage Issued Books</h4>
                        </div>
                        <div class="col-md-12">


                            <div class="card">
                                <div class="card-header">
                                    All Students
                                </div>
                                <div class="card-body">
                                    <table class="table">
                                        <thead class="table-dark">

                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Book Name</th>
                                                <th scope="col">Student Name</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Return Date</th>
                                                <th scope="col">Action </th>
                                                <th scope="col">Send Mail</th>
                                                <th scope="col">Return Section</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{item["book-name"]}</td>
                                                            <td>{item["student-name"]}</td>
                                                            <td>{item["Issued-date"]}</td>
                                                            <td>{item["return-date"]}</td>
                                                            <td>
                                                                <div class="btn btn-primary btn-sm">Edit </div>
                                                                <div class="btn btn-danger btn-sm" onClick={() => deleteissued(item.$id)}>Delete </div>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-success btn-sm" onClick={() => { setUserMail(item.studentEmail); handleSendMail() }}>Send Mail</button>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-danger btn-sm" onClick={() => { returnBook(item) }}>Return Book</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })

                                            }


                                        </tbody>
                                    </table>
                                    {/* Modal for sending mail */}
                                    <Modal show={showModal} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Send Mail</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <textarea name="" id="" onChange={(e) => setMail(e.target.value)} cols="60" value={mail} rows="8"></textarea>
                                            {/* <input type="text" /> */}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleClose}>
                                                Send
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
