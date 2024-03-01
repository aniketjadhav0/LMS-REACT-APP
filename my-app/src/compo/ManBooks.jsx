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
            <main class="mt-1 pt-3">
                <div class="container-fluid">


                    <div class="row dashboard-counts">
                        <div class="col-md-12">
                            <h4 class="fw-bold text-uppercase"> Manage Books </h4>
                        </div>
                        <div class="col-md-12">


                            <div class="card">
                                <div class="card-header">
                                    All Books
                                </div>
                                <div class="card-body">
                                    <table class="table">
                                        <thead class="table-dark">
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
                                                            <a href="#" class="btn  btn-primary btn-sm">Edit </a>
                                                            <a href="#" onClick={() => deleteBook(item.$id)} class="btn btn-danger btn-sm">Delete </a>
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
