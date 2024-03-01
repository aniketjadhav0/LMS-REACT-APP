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
            <main class="mt-1 pt-3">
                <div class="container-fluid">


                    <div class="row dashboard-counts">
                        <div class="col-md-12">
                            <h4 class="fw-bold text-uppercase"> Manage Students</h4>
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
                                                            <a href="#" class="btn btn-primary btn-sm">Edit </a>
                                                            <a href="#" onClick={()=>deleteRecord(item.$id)} class="btn btn-danger btn-sm">Delete </a>
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
