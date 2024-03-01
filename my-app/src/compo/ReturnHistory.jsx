import React, { useEffect, useState } from 'react'
import { delRet, listReturned } from '../appwrite/database';

export default function ReturnHistory() {
    const [data , setData] = useState();
    useEffect(()=>{
        listReturned(res=>setData(res));
        
    },[]);
  return (
    <div>
          <main class="mt-1 pt-3">
                <div class="container-fluid">


                    <div class="row dashboard-counts">
                        <div class="col-md-12">
                            <h4 class="fw-bold text-uppercase"> Returned Books</h4>
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
                                                                 <div class="btn btn-danger btn-sm" onClick={() =>  {delRet(item.$id)}}>Delete </div>
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
