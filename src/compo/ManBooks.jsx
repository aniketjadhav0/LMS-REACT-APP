import React, { useState } from 'react'
import { useEffect } from 'react'
import { deleteBook, listBooks, updateBook } from '../appwrite/database'

export default function ManBooks() {
    const [books, setBooks] = useState([]);
    const [editableBook, setEditableBook] = useState(null);
    const [editedBookName, setEditedBookName] = useState('');
    const [editedISBN, setEditedISBN] = useState('');
    const [editedPublisherName, setEditedPublisherName] = useState('');
    const [editedAuthorName, setEditedAuthorName] = useState('');

    useEffect(() => {
        listBooks(res => {
            setBooks(res.documents);
        });
    }, []);

    const edit = (index) => {
        setEditableBook(index);
        // Set the initial values for the edited fields
        setEditedBookName(books[index]["book-name"]);
        setEditedISBN(books[index]["ISBN-number"]);
        setEditedPublisherName(books[index]["publisher-name"]);
        setEditedAuthorName(books[index]["author-name"]);
    };

    const updateBookData = (index) => {

        setBooks(prevBooks => {
            const updatedBooks = [...prevBooks];
            updatedBooks[index] = {
                ...prevBooks[index],
                "book-name": editedBookName,
                "ISBN-number": editedISBN,
                "publisher-name": editedPublisherName,
                "author-name": editedAuthorName,
            };
            return updatedBooks;
        });
        updateBook(books[index]["$id"], editedBookName, editedISBN, editedAuthorName, editedPublisherName)
        // Clear the editable state
        setEditableBook(null);
    };
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
                                            {books &&
                                                books.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            {editableBook === index ? (
                                                                <input
                                                                    type="text"
                                                                    style={{ border: "none" }}
                                                                    value={editedBookName}
                                                                    onChange={(e) => setEditedBookName(e.target.value)}
                                                                />
                                                            ) : (
                                                                item["book-name"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableBook === index ? (
                                                                <input
                                                                    type="text"
                                                                    style={{ border: "none" }}
                                                                    value={editedISBN}
                                                                    onChange={(e) => setEditedISBN(e.target.value)}
                                                                />
                                                            ) : (
                                                                item["ISBN-number"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableBook === index ? (
                                                                <input
                                                                    type="text"
                                                                    style={{ border: "none" }}
                                                                    value={editedPublisherName}
                                                                    onChange={(e) => setEditedPublisherName(e.target.value)}
                                                                />
                                                            ) : (
                                                                item["publisher-name"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableBook === index ? (
                                                                <input
                                                                    type="text"
                                                                    style={{ border: "none" }}
                                                                    value={editedAuthorName}
                                                                    onChange={(e) => setEditedAuthorName(e.target.value)}
                                                                />
                                                            ) : (
                                                                item["author-name"]
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editableBook === index ? (
                                                                <>
                                                                    <div className="btn btn-success btn-sm" onClick={() => updateBookData(index)}>Save</div>
                                                                    <div className="btn btn-secondary btn-sm" onClick={() => setEditableBook(null)}>Cancel</div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="btn btn-primary btn-sm" onClick={() => edit(index)}>Edit</div>
                                                                    <div className="btn btn-danger btn-sm" onClick={() => deleteBook(item.$id)}>Delete</div>
                                                                </>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
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
