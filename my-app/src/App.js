import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./compo/Auth";
import Navbar from "./compo/Navbar";
import Dashboard from "./compo/Dashboard";
import AddBook from "./compo/AddBook";
import AddRecord from "./compo/AddRecord";
import ManageSTd from "./compo/ManageSTd";
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Auth />} />
        {/* <Dashboard/> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addrecord" element={<AddRecord />} />
        <Route path="/manage" element={<ManageSTd />} />
        {/* <ManageSTd/> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<Dashboard />} />
        </Routes> */}
        {/* <AddRecord/> */}
      </Routes>
    </div>
  );
}

export default App;
