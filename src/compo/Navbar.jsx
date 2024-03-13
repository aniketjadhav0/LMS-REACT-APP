import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { databases, logoutf } from '../appwrite/appwrite';
import Cookies from 'js-cookie';
import { Query } from 'appwrite';
import { Button, Modal, Table } from 'react-bootstrap';

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
                [Query.search("book-name", search)]
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

                <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="navbar-brand fw-bold text-uppercase me-auto" href=" ">GP BEED </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex ms-auto " role="search">
                        <div class="input-group my-3 my-lg-0 ">
                            <input type="text" class="form-control" placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                aria-label="Recipient's username" aria-describedby="button-addon2" />

                            <button class="btn btn-outline-secondary btn-primary text-white " type="button"
                                id="button-addon2"
                                onClick={searchdb}>
                                <i class="fa-solid fa-magnifying-glass"></i></button>
                            <SearchResultModal show={show}
                                onHide={() => setshow(false)}
                                searchData={data} />
                        </div>
                    </form>

                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <div class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="./assets/images/user.jpg " style={{ width: "3%" }} class="user-icon" alt="" />
                                Admin
                            </div>
                            <ul class="dropdown-menu dropdown-menu-end ">
                                <li> <div class="dropdown-item"  >My Profile </div></li>
                                <li> <div class="dropdown-item"  >Change Password </div></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li> <div class="dropdown-item"  >Logout </div></li>
                            </ul>
                        </li>

                    </ul>
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
                                <i class="fa-solid fa-table-columns me-2"> </i>Dashboard </div>
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
                                <i class="fa-solid fa-book me-1"></i> Books Management
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="booksMgmt">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addbook"} class="nav-link ">
                                                <i class="fa-solid fa-plus me-2"></i> Add New
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-books"} class="nav-link ">
                                                <i class="fa-solid fa-list me-2"></i> Manage All
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>



                        <li class="nav-item">

                            <div class="nav-link sidebar-link " data-bs-toggle="collapse" href="#studentMGMT" role="button"
                                aria-expanded="false" aria-controls="studentMGMT">
                                <i class="fa-solid fa-users me-1"></i> Students Management
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="studentMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/addrecord"} class="nav-link ">
                                                <i class="fa-solid fa-plus me-2"></i> Add New
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-record"} class="nav-link ">
                                                <i class="fa-solid fa-list me-2"></i> Manage All
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
                                <i class="fa-solid fa-book-open me-1"></i> Provide Books
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="issuedMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <Link to={"/issue-book"} class="nav-link ">
                                                <i class="fa-solid fa-hand-holding-hand me-2"></i>Issue Books

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/manage-issue-Book"} class="nav-link ">
                                                <i class="fa-solid fa-list-check me-2"></i> Manage Issued Books
                                            </Link>
                                        </li>



                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="nav-link sidebar-link " data-bs-toggle="collapse" href="#ReturnMGMT" role="button"
                                aria-expanded="false" aria-controls="ReturnMGMT">
                                <i class="fa-solid fa-right-left me-2"></i> Return Books
                                <span class="right-icon float-end"> <i class="fa-solid fa-chevron-down "></i></span>
                            </div>

                            <div class="collapse" id="ReturnMGMT">
                                <div>
                                    <ul class="navbar-nav ps-3">
                                        <li>
                                            <div class="nav-link ">
                                                <i class="fa-solid fa-square-envelope me-2">
                                                </i>Notification

                                            </div>
                                        </li>
                                        <li>
                                            <Link to={"/return-history"} class="nav-link ">
                                                <i class="fa-solid fa-arrow-right-arrow-left me-2"></i> Return History
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
                                <i class="fa-solid fa-right-from-bracket me-2"></i> Logout </div>
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
