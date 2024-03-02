import { ID } from "appwrite";
import { databases } from "./appwrite";

// creation
const createBook = (bookName, isbn, authorName, PubName, course, sem ,cb) => {
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
    .catch((er) => {
      cb(er.message)
      // console.log(er.message);
    });
  // databases.createDocument()
};
 
const returnbook = (bookname, stdname, idate, rdate , id) => {
  databases
    .createDocument(
      String(process.env.REACT_APP_DATABASE_ID),
      process.env.REACT_APP_RETURN_SECTION,
      ID.unique(),
      {
        "book-name": bookname,
        "student-name": stdname,
        "issued-date": idate,
        "return-date": rdate,
      }
    )
    .then((res) => {
      // console.log(res);
      if(res.$id){
        deleteissued(id);
      }
      return res;
    })
    .catch((er) => {
      // console.log(er.message);
      return false;
    });
};

const issueBook = (bookName, stdName, idate, rdate,cb) => {
   databases
    .createDocument(
      String(process.env.REACT_APP_DATABASE_ID),
      process.env.REACT_APP_MANAGE_ISSUED,
      ID.unique(),
      {
        "book-name": bookName,
        "student-name": stdName,
        "Issued-date": idate,
        "return-date": rdate,
      }
    )
    .catch((er) => {
      cb(er.message)
    });
  // databases.createDocument()
};
const createRecord = (stdName, enr, email, mob, course, sem ,cb) => {
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
        course: course,
        semester: sem,
      }
    )
     
    .catch((er) => {
      cb(er.message);
    });
};
// listing operation

const listRecord = (callback) => {
  let a;
  a = databases
    .listDocuments(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_STD)
    .then((res) => {
      // console.log(res.documents);
      a = res.documents;
      callback(a);
      // return res.documents;
    })
    .catch((er) => {
      // console.log(er.message);
      callback(false);
    });
};
const listBooks = (callback) => {
  databases
    .listDocuments(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_BOOK
    )
    .then((res) => {
      // console.log(res.documents);

      callback(res);
      // return res.documents;
    })
    .catch((er) => {
      // console.log(er.message);
      callback(false);
    });
};
const listReturned = (callback)=>{
  databases
    .listDocuments(
      String(process.env.REACT_APP_DATABASE_ID),
      process.env.REACT_APP_RETURN_SECTION
    )
    .then((res) => {
      callback(res.documents);
      
      // console.log(res);
      
    })
    .catch((er) => {
      // console.log(er.message);
      callback(false);
    });

}
const listIssued = (callback) => {
  databases
    .listDocuments(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_MANAGE_ISSUED
    )
    .then((res) => {
      // console.log(res.documents);

      callback(res.documents);
      // return res.documents;
    })
    .catch((er) => {
      // console.log(er.message);
      callback(false);
    });
};

// delete operations

const deleteRecord = (id) => {
  databases.deleteDocument(
    process.env.REACT_APP_DATABASE_ID,
    process.env.REACT_APP_STD,
    id
  );
  window.location.reload();
};
const deleteBook = (id) => {
  databases.deleteDocument(
    process.env.REACT_APP_DATABASE_ID,
    process.env.REACT_APP_BOOK,
    id
  );
  window.location.reload();
};
const deleteissued = (id) => {
  databases.deleteDocument(
    process.env.REACT_APP_DATABASE_ID,
    process.env.REACT_APP_MANAGE_ISSUED,
    id
  );
};
const delRet = (id) => {
  databases.deleteDocument(
    process.env.REACT_APP_DATABASE_ID,
    process.env.REACT_APP_RETURN_SECTION,
    id
  );
};

export {
  createBook,
  createRecord,
  listBooks,
  returnbook,
  listIssued,
  deleteRecord,
  issueBook,
  delRet,
  deleteBook,
  listReturned,
  deleteissued,
  listRecord,
};
