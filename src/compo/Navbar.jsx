import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { databases, logoutf } from '../appwrite/appwrite';
import Cookies from 'js-cookie';
import { Query } from 'appwrite';
import { Button, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faBook, faUsers, faHandHoldingHand, faListCheck, faRightLeft, faArrowRightArrowLeft, faSquareEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const userToken = Cookies.get('isAuth');
    const loc = useLocation()
    const [search, setSearch] = React.useState("")
    const [data, setData] = React.useState()
    const [show, setshow] = React.useState(false)

    const nav = useNavigate()
    if (userToken !== "true" && loc.pathname !== "/") {
        nav("/");
    }
    if (userToken === "true" && loc.pathname === "/") {
        nav("/dashboard");
    }
    const logout = () => {
        if (userToken === "true") {
            logoutf();
            nav("/");
            Cookies.remove("isAuth");
        } else {
            alert("login first !");
        }
    }
    const searchdb = () => {
        if (search.length > 0) {
            const data = databases.listDocuments(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_BOOK,
                [Query.search("book-number", search)]
            )
            data.catch(e => {
                alert(e.message)
            })
            data.then((res) => {
                setshow(true)
                
                setData(res.documents)
            })
        } else {
            alert("enter something to search")
        }
    }
    return (
        <nav class="navbar  navbar-dark bg-dark">
            <div class="container-fluid">

                <button class="navbar-toggler me-2 " type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="navbar-brand fw-bold text-uppercase me-auto" href=" "> GP BEED </div>
                
                <div class=" form-control-sm " id="navbarSupportedContent">
                    <form class="d-flex ms-auto " role="search">
                        <div class="input-group my-3 my-lg-2 ">
                            <input type="text" class="form-control"  placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                aria-label="Recipient's username" aria-describedby="button-addon2" />

                            <button class="btn btn-outline-secondary btn-primary text-white  " type="button"
                                id="button-addon2"
                                onClick={searchdb}>
                                <FontAwesomeIcon icon={faSearch} /></button>
                            <SearchResultModal show={show}
                                onHide={() => setshow(false)}
                                searchData={data} />
                        </div>
                    </form>

                   
                </div>
            </div>

            <div class="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">


                <div class="offcanvas-body">
                    <ul class="navbar-nav">

                        {/* <!-- This is for add code and Dashboard --> */}

                        <li class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Core</div>
                        </li>

                        <Link to={"/dashboard"} class="nav-item">
                            <div class="nav-link active" aria-current="page" href="./dashboard.html">
                            <FontAwesomeIcon icon={faTableColumns}  /> Dashboard </div>
                        </Link>

                        <li class="nav-item my-0">
                            <hr />
                        </li>

                        {/* <!-- end --> */}

                        {/* <!-- This for  Books Management --> */}
                        <Link to={""} class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Inventory </div>
                        </Link>

                        <li class="nav-item">

                            <div class="nav-link sidebar-link " data-bs-toggle="collapse" href="#booksMgmt" role="button"
                                aria-expanded="false" aria-controls="booksMgmt">
                               <FontAwesomeIcon icon={faBook} /> Books Management
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="booksMgmt">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addbook"} class="nav-link ">
                                            <FontAwesomeIcon icon={faPlus} /> Add New Book
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-books"} class="nav-link ">
                                            <FontAwesomeIcon icon={faListCheck} /> Manage All Books
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>



                        <li class="nav-item">

                            <div class="nav-link sidebar-link " data-bs-toggle="collapse" href="#studentMGMT" role="button"
                                aria-expanded="false" aria-controls="studentMGMT">
                                <FontAwesomeIcon icon={faUsers} /> Students Management
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="studentMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addrecord"} class="nav-link ">
                                            <FontAwesomeIcon icon={faPlus} />  Add New Student
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-record"} class="nav-link ">
                                            <FontAwesomeIcon icon={faListCheck} /> Manage All Students
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>




                        <li class="nav-item my-0">
                            <hr />
                        </li>


                        <li class="nav-item">
                            <div class="text-secondary small text-uppercase fw-bold"> Action </div>
                        </li>


                        <li class="nav-item">
                            <div class="nav-link sidebar-link " data-bs-toggle="collapse" href="#issuedMGMT" role="button"
                                aria-expanded="false" aria-controls="issuedMGMT">
                                <FontAwesomeIcon icon={faArrowRight} /> Provide Books
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="issuedMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/issue-book"} class="nav-link ">
                                            <FontAwesomeIcon icon={faHandHoldingHand}faHandHoldingHand /> Issue Books

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-issue-Book"} class="nav-link ">
                                            <FontAwesomeIcon icon={faListCheck} /> Manage Issued Books
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="nav-link sidebar-link " data-bs-toggle="collapse" href="#ReturnMGMT" role="button"
                                aria-expanded="false" aria-controls="ReturnMGMT">
                                <FontAwesomeIcon icon={faArrowLeft} /> Return Books
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="ReturnMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            
                                        </li>
                                        <li>
                                            <Link to={"/return-history"} class="nav-link ">
                                            <FontAwesomeIcon icon={faHistory} />  Return History
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li class="nav-item my-0">
                            <hr />
                        </li>

                        <li class="nav-item" onClick={logout}>
                            <div class="nav-link active" aria-current="page"  >
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout </div>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>
    )
}



const SearchResultModal = ({ show, onHide, searchData }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Search Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                {/* Add more table headers based on your data */}
                            </tr>
                        </thead>
                        <tbody>
                            {searchData ? searchData.map((result, index) => (
                                <tr key={index}>
                                    <td>{result['book-name']}</td>
                                    {/* Add more table cells based on your data */}
                                </tr>
                            )):
                                <tr>
                                    <td>No Data Found</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
