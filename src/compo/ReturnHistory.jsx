import React, { useEffect, useState } from 'react'
import { delRet, listReturned } from '../appwrite/database';

export default function ReturnHistory() {
    const [data , setData] = useState();
    useEffect(()=>{
        listReturned(res=>setData(res));
        
    },[]);
  return (
    <div>
          <main className="mt-1 pt-3">
                <div className="container-fluid">


                    <div className="row dashboard-counts">
                        <div className="col-md-12">
                            <h4 className="fw-bold text-uppercase"> Returned Books</h4>
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
                                                <th scope="col">Book Name</th>
                                                <th scope="col">Student Name</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Return Date</th>
                                                <th scope="col">Action </th>
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
                                                            <td>{item["issued-date"]}</td>
                                                            <td>{item["return-date"]}</td>
                                                            <td>
                                                                 <div className="btn btn-danger btn-sm" onClick={() =>  {delRet(item.$id)}}>Delete </div>
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
  )
}
