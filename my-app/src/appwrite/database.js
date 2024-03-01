import { ID } from "appwrite";
import { databases } from "./appwrite";

const createBook = (bookName, isbn, authorName, PubName, course, sem) => {
  console.log(String(process.env.REACT_APP_DATABASE_ID));
  databases
    .createDocument(
      String(process.env.REACT_APP_DATABASE_ID),
      process.env.REACT_APP_BOOK,
      ID.unique(),
      {
        "book-name": bookName,
        "ISBN-number": isbn,
        "author-name": authorName,
        "publisher-name": PubName,
        course: [course],
        semester: [sem],
      }
    )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((er) => {
      console.log(er.message);
      return false;
    });
  // databases.createDocument()
};
const createRecord = (stdName, enr, email, mob, course, sem) => {
  databases
    .createDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_STD,
      ID.unique(),
      {
        "student-name": stdName,
        "enrollment-number": enr,
        "email-address": email,
        "phone-number": mob,
        "course": course,
        "semester": sem,
      }
    )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((er) => {
      console.log(er.message);
      return false;
    });
};
const listRecord = (callback)=>{
  let a ;
 a = databases.listDocuments(process.env.REACT_APP_DATABASE_ID,process.env.REACT_APP_STD)
  .then((res)=>{
    // console.log(res.documents);
    a = res.documents
    callback(a)
    // return res.documents;
  })
  .catch((er)=>{
    console.log(er.message);
    callback(false)
  })
}
const deleteRecord = (id)=>{
databases.deleteDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_STD, id)
window.location.reload()
}
export { createBook, createRecord , deleteRecord,listRecord};
