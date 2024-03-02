import React, { useEffect, useState } from 'react'
import { deleteRecord, listRecord } from '../appwrite/database'

export default function ManageSTd() {
    const [record, setRecord] = useState([]);
    useEffect(() => {
        listRecord((data) => {
            // Use the data here
            setRecord(data);
          });
            
        // }
        // setRecord(a);
    },[])
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
                                            {
                                                record.map((item, index) => {
                                                    console.log();
                                                    return (<tr key={index}>
                                                        <th scope="row">{index}</th>
                                                        <td>{item["student-name"]}</td>
                                                        <td>{item["enrollment-number"]}</td>
                                                        <td>{item["email-address"]} </td>
                                                        <td>{item["phone-number"]}</td>
                                                        <td>
                                                            <div  className="btn btn-primary btn-sm">Edit </div>
                                                            <div   onClick={()=>deleteRecord(item.$id)} className="btn btn-danger btn-sm">Delete </div>
                                                        </td>
                                                    </tr>)
                                                })
                                            }

                                            <tr>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}