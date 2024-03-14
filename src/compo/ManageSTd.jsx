import React, { useEffect, useState } from 'react';
import { deleteRecord, listRecord, updateRecord } from '../appwrite/database';

export default function ManageSTd() {
    const [records, setRecords] = useState([]);
    const [isRecordsLoaded, setIsRecordsLoaded] = useState(false);
    const [editableRecord, setEditableRecord] = useState(null);
    const [editedData, setEditedData] = useState({
        "student-name": '',
        "enrollment-number": '',
        "email-address": '',
        "phone-number": '',
    });

    useEffect(() => {
        listRecord((data) => {
            setRecords(data);
            setIsRecordsLoaded(true);
        });
    }, []);

    const editRecord = (index) => {
        setEditableRecord(index);
        // Set the initial values for the edited fields
        setEditedData({
            "student-name": records[index]["student-name"],
            "enrollment-number": records[index]["enrollment-number"],
            "email-address": records[index]["email-address"],
            "phone-number": records[index]["phone-number"],
        });
    };

    const updateRecordData = (index) => {
        // Call your updateRecord function here with the updated data
        
        // Update the records state with the edited data
        setRecords((prevRecords) => {
            const updatedRecords = [...prevRecords];
            updatedRecords[index] = {
                ...prevRecords[index],
                "student-name": editedData["student-name"],
                "enrollment-number": editedData["enrollment-number"],
                "email-address": editedData["email-address"],
                "phone-number": editedData["phone-number"],
            };
            return updatedRecords;
        });
        updateRecord(
            records[index]["$id"],
            editedData["student-name"],
             editedData["enrollment-number"],
            editedData["email-address"],
             editedData["phone-number"],
        );
        
        // Clear the editable state
        setEditableRecord(null);
    };

    return (
        <div>
            <main className="mt-1 pt-3">
                <div className="container-fluid">
                    <div className="row dashboard-counts">
                        <div className="col-md-12">
                            <h4 className="fw-bold text-uppercase"> Manage Students</h4>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    All Students
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Student Name</th>
                                                <th scope="col">Enrollment Number</th>
                                                <th scope="col">Email Address</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(isRecordsLoaded && records) ? (
                                                records.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
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
                                                                    value={editedData["enrollment-number"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "enrollment-number": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["enrollment-number"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <input
                                                                    type="text"
                                                                    value={editedData["email-address"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "email-address": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["email-address"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableRecord === index ? (
                                                                <input
                                                                    type="text"
                                                                    value={editedData["phone-number"]}
                                                                    onChange={(e) => setEditedData({ ...editedData, "phone-number": e.target.value })}
                                                                />
                                                            ) : (
                                                                item["phone-number"]
                                                            )}
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
                                                                    <div className="btn btn-danger btn-sm" onClick={() => deleteRecord(item.$id)}>Delete</div>
                                                                </>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr className='m-5'>
                                                    <td colSpan="6">
                                                        <div class="spinner-border p-3" role="status">
                                                            <span class="sr-only"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
