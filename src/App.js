import {  Routes, Route } from "react-router-dom";
import Auth from "./compo/Auth";
import Navbar from "./compo/Navbar";
import Dashboard from "./compo/Dashboard";
import AddBook from "./compo/AddBook";
import AddRecord from "./compo/AddRecord";
import ManageSTd from "./compo/ManageSTd";
import ManBooks from "./compo/ManBooks";
import IssueBook from "./compo/issuebook";
import ManageIssueBook from "./compo/issuebookmanage";
import ReturnHistory from "./compo/ReturnHistory";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addrecord" element={<AddRecord />} />
        <Route path="/issue-book" element={<IssueBook />} />
        <Route path="/manage-record" element={<ManageSTd />} />
        <Route path="/return-history" element={<ReturnHistory />} />
        <Route path="/manage-issue-Book" element={<ManageIssueBook />} />
        <Route path="/manage-books" element={<ManBooks />} />
      </Routes>
    </div>
  );
}

export default App;
