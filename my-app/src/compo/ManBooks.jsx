import React from 'react'
import { useEffect } from 'react'
import { deleteBook, listBooks } from '../appwrite/database'

export default function ManBooks() {
    const [book, setBooks] = React.useState([]);
    useEffect(() => {
        listBooks(res => {
            setBooks(res);
        })
    }, [])
    return (
        <div>
            <main className="mt-1 pt-3">
                <div className="container-fluid">


                    <div className="row dashboard-counts">
                        <div className="col-md-12">
                            <h4 className="fw-bold text-uppercase"> Manage Books </h4>
                        </div>
                        <div className="col-md-12">


                            <div className="card">
                                <div className="card-header">
                                    All Books
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Book Name</th>
                                                <th scope="col">ISBN Number</th>
                                                <th scope="col">Publisher Name</th>
                                                <th scope="col">Author Name</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                book &&
                                                book.map((item, index) => {
                                                    return (<tr key={index}>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{item["book-name"]}</td>
                                                        <td>{item["ISBN-number"]}</td>
                                                        <td>{item["publisher-name"]}</td>
                                                        <td>{item["author-name"]}</td>
                                                        <td>
                                                            <div   className="btn  btn-primary btn-sm">Edit </div>
                                                            <div   onClick={() => deleteBook(item.$id)} className="btn btn-danger btn-sm">Delete </div>
                                                        </td>
                                                    </tr>)

                                                })
                                            }

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
