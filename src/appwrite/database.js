import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

// creation
const createBook = (bookName, isbn, authorName, PubName, course, bNum, cb) => {
  databases
    .listDocuments(
       process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_BOOK,
      [Query.equal("book-number", bNum)]
    )
    .then((res) => {
      console.log(res);
      if (res.total > 0) {
        cb("Book already exists");
        return;
      }
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
            "book-number": bNum,
          }
        ).then(res=>{cb("success")})
        .catch((er) => {
          cb(er.message);
          console.log(er.message);
        });
    });

  // databases.createDocument()
};

const returnbook = (bookname, stdname, idate, rdate, id) => {
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
      console.log(res);
      if (res.$id) {
        deleteissued(id);
      }
    })
    .catch((er) => {
      console.log(er.message);
    });
};

const issueBook = (bookName, stdName, idate, rdate, email, cb) => {
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
        emailAddress: email,
      }
    )
    .catch((er) => {
      cb(er.message);
    });
  // databases.createDocument()
};
const createRecord = (stdName, enr, email, mob, course, sem, cb) => {
  // checking if the enrollment already exists or not
  databases
    .listDocuments(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_STD,
      [Query.equal("enrollment-number", enr)]
    )
    .then((res) => {
      console.log(res);
      if (res.documents.length === 0) {
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
      } else {
        cb("Enrollment Alrady exist");
      }
    })
    .catch((er) => {
      console.log(er);
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
      console.log(er.message);
      callback(false);
    });
};
const listReturned = (callback) => {
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
};
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
  databases
    .deleteDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_STD,
      id
    )
    .then((e) => {
      if (e.message === "") {
        window.location.reload();
      }
    })
    .catch((er) => {
      console.log(er);
    });
};
const deleteBook = (id) => {
  databases
    .deleteDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_BOOK,
      id
    )
    .then(() => {
      window.location.reload();
    })
    .catch((er) => {
      console.log(er);
    });
};
const deleteissued = (id) => {
  databases
    .deleteDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_MANAGE_ISSUED,
      id
    )
    .then(() => {
      window.location.reload();
    });
};
const delRet = (id) => {
  databases
    .deleteDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_RETURN_SECTION,
      id
    )
    .then(() => {
      window.location.reload();
    });
};
// edit or update operations
const updateBook = (id, bookName, isbn, authorName, PubName, bNum) => {
  databases
    .updateDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_BOOK,
      id,
      {
        "book-name": bookName,
        "ISBN-number": isbn,
        "author-name": authorName,
        "publisher-name": PubName,
        "book-number": bNum,
      }
    )
    .catch((e) => alert(e.message));
};
const updateRecord = (id, stdName, enr, email, mob) => {
  databases
    .updateDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_STD,
      id,
      {
        "student-name": stdName,
        "enrollment-number": enr,
        "email-address": email,
        "phone-number": mob,
      }
    )
    .catch((e) => alert(e.message));
};
const updateIssued = (id, bookName, stdName, idate, rdate) => {
  databases
    .updateDocument(
      process.env.REACT_APP_DATABASE_ID,
      process.env.REACT_APP_MANAGE_ISSUED,
      id,
      {
        "book-name": bookName,
        "student-name": stdName,
        "Issued-date": idate,
        "return-date": rdate,
      }
    )
    .catch((e) => alert(e.message));
};
export {
  createBook,
  createRecord,
  issueBook,
  returnbook,
  listBooks,
  listIssued,
  listReturned,
  listRecord,
  deleteRecord,
  delRet,
  deleteBook,
  deleteissued,
  updateBook,
  updateRecord,
  updateIssued,
};
