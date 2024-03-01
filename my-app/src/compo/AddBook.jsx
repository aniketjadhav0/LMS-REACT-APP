import React from 'react'
import { useState } from 'react'
import { createBook } from '../appwrite/database';

export default function AddBook() {
    const [bookName , setBookName] = useState("");
    const [isbn , setisbn] = useState("");
    const [authorName , setAuthorName] = useState("");
    const [PubName, setPubName] = useState("");
    const [course , setCourse] = useState("df");
    const [sem , setSem] = useState("");

    

    const addBook = ()=>{
       const res =  createBook(bookName,isbn,authorName,PubName,course,sem)
        if (res == false) {
            alert("book add; got failed")
        }else{
            alert("book add; got success")
        }
    }
    return (
        <main class="mt-1 pt-3">
            <div class="container-fluid">


                <div class="row dashboard-counts">
                    <div class="col-md-12">
                        <h4 class="fw-bold text-uppercase"> Add Book </h4>
                    </div>

                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                Fill the form
                            </div>
                            <div class="card-body">

                                <div>
                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1"
                                                    class="form-label">Book Name</label>

                                                <input type="text"
                                                    class="form-control"
                                                    value={bookName}
                                                    onChange={(e)=>setBookName(e.target.value)}
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1"
                                                    class="form-label">ISBN Number</label>

                                                <input type="text"
                                                    class="form-control"
                                                    value={isbn}
                                                    onChange={(e)=>setisbn(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1"
                                                    class="form-label">Author Name</label>

                                                <input type="text"
                                                    class="form-control"
                                                    value={authorName}
                                                    onChange={(e)=>setAuthorName(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1"
                                                    class="form-label">Publisher Name</label>

                                                <input type="text"
                                                    class="form-control"
                                                    value={PubName}
                                                    onChange={(e)=>setPubName(e.target.value)}
                                                    id="exampleInputPassword1" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1"
                                                    class="form-label">Course</label>

                                                <select class="form-control" 
                                                value={course}
                                                 onChange={(e)=>{
                                                    setCourse(e.target.value)
                                                    console.log(e.target);
                                                    }}
                                                    >
                                                    <option value=""> Please select </option>
                                                    <option value="Computer Engineering"> Computer Engineering </option>
                                                    <option value="Civil Engineering"> Civil Engineering</option>
                                                    <option value="Printing Engineering"> Printing Engineering</option>
                                                    <option value="Electronics Engineerig"> Electronics Engineering</option>
                                                    <option value="Electrical Engineering"> Electrical Engineering</option>
                                                    <option value="Mechanical Engineering"> Mechanical Engineering </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1"
                                                    class="form-label">Semester</label>

                                                <select class="form-control"
                                                value={sem} onChange={(e)=>{setSem(e.target.value)}}>
                                                    <option value=""> Select Semester </option>
                                                    <option value="First"> First Semester </option>
                                                    <option value="Second"> Second Semester</option>
                                                    <option value="Third"> Third Semester</option>
                                                    <option value="Fourth"> Fourth Semester</option>
                                                    <option value="Fifth"> Fifth Semester</option>
                                                    <option value="Sixth"> Sixth Semester </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <button onClick={addBook} type="submit" class="btn btn-success">Publish</button>
                                            <button type="reset" class="btn btn-secondary">Cancel</button>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main >
    )
}
