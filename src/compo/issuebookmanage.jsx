import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deleteissued, listIssued, returnbook, updateIssued } from '../appwrite/database';
import sendMail from "./../mail/nodemailer";

export default function ManageIssueBook() {
    const [data, setData] = useState([]);
    const [isRecord, setIsRecord] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [mail, setMail] = useState("I trust this message finds you in good spirits. A friendly reminder that the due date for the book you borrowed from our library has passed. Your prompt return would be greatly appreciated, ensuring all members have timely access. If there are any challenges, feel free to reach out.");
    const [userMail, setUserMail] = useState("");
    const [editableRecord, setEditableRecord] = useState(null);
    const [editedData, setEditedData] = useState({
        "book-name": '',
        "student-name": '',
        "Issued-date": '',
        "return-date": '',
    });

    const handleSendMail = () => setShowModal(true);

    const handleClose = async () => {
        setShowModal(false);
        try {
            sendMail(userMail, mail);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listIssued((res) => {
            setData(res);
            setIsRecord(true);
        });
    }, []);

    const returnBook = (item) => {
        returnbook(item["book-name"],
            item["student-name"],
            item["Issued-date"],
            item["return-date"],
            item.$id);
    }

    const editRecord = (index) => {
        setEditableRecord(index);
        // Set the initial values for the edited fields
        setEditedData({
            "book-name": data[index]["book-name"],
            "student-name": data[index]["student-name"],
            "Issued-date": data[index]["Issued-date"],
            "return-date": data[index]["return-date"],
        });
    };

    const updateRecordData = (index) => {
        // Call your updateIssued function here with the updated data
        updateIssued(
            data[index]["$id"],
            editedData["book-name"],
            editedData["student-name"],
            editedData["Issued-date"],
            editedData["return-date"],
        );

        // Update the data state with the edited data
        setData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = {
                ...prevData[index],
                "book-name": editedData["book-name"],
                "student-name": editedData["student-name"],
                "Issued-date": editedData["Issued-date"],
                "return-date": editedData["return-date"],
            };
            return updatedData;
        });

        // Clear the editable state
        setEditableRecord(null);
    };

    return (
        <div>
            <main className="mt-1 pt-3">
                <div className="container-fluid">
                    <div className="row dashboard-counts">
                        <div className="col-md-12">
                            <h4 className="fw-bold text-uppercase"> Manage Issued Books</h4>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                   Students Issued Books 
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Book Name</th>
                                                <th scope="col">Student Name</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Return Date</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Action </th>
                                                <th scope="col">Send Mail</th>
                                                <th scope="col">Return Section</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(isRecord && data) ?
                                                data.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <input
                                                                    type="text"
                                                                    value={editedData["book-name"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "book-name": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["book-name"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <input
                                                                    type="text"
                                                                    value={editedData["student-name"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "student-name": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["student-name"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <input
                                                                    type="text"
                                                                    value={editedData["Issued-date"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "Issued-date": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["Issued-date"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <input
                                                                    type="text"
                                                                    value={editedData["return-date"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "return-date": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["return-date"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {
                                                            
                                                                item["emailAddress"]
                                                            }
                                                        </td>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <>
                                                                    <div className="btn btn-success btn-sm" onClick={() => updateRecordData(index)}>Save</div>
                                                                    <div className="btn btn-secondary btn-sm" onClick={() => setEditableRecord(null)}>Cancel</div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="btn btn-primary btn-sm" onClick={() => editRecord(index)}>Edit</div>
                                                                    <div className="btn btn-danger btn-sm" onClick={() => deleteissued(item.$id)}>Delete</div>
                                                                </>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-success btn-sm" onClick={() => { setUserMail(item.emailAddress); handleSendMail() }}>Send Mail</button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger btn-sm" onClick={() => { returnBook(item) }}>Return Book</button>
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"></span>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"> </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"> </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"> </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="spinner-border  p-3" role="status">
                                                            <span class="sr-only"> </span>
                                                        </div>
                                                    </td>
                                                </tr>
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
    );
}
