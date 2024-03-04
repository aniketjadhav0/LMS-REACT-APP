import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { login } from '../appwrite/appwrite'
import { Alert } from 'bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Auth() {
  const [username, setUername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // 
  const nav = useNavigate();
  const handleLogin = (e) => {
    login(username, password, e => setError(e))
    if (error === "") {
      alert("Click on login again")

    }
    if (error === "success") {
      toast('Login successful!');
      Cookies.set('isAuth', 'true', { expires: 7 }); // Expires in 7 days
      nav("/dashboard")
    }
     
  }
  const pushover = () => {
    toast('Login successful!');
    const b = new Alert("hey")
    b.dispose()
  }
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row">
        <div className="col-md-12 login-form">
          <div className="card mb-3" style={{ maxWidth: "900px" }}>
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src="/assets/images/login-bg.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h1 className="card-title text-uppercase fw-bold">
                    GP BEED LIBRARY
                  </h1>
                  <p className="card-text" onDoubleClick={pushover}>Enter email and password to login.</p>
                  {
                    error &&
                    <div class="alert alert-danger" role="alert">
                      {error}
                    </div>

                  }
                  <div >
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={username}
                        onChange={(e) => setUername(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />

                      <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>

                      <button type="submit" onClick={(e) => handleLogin(e.target)} className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                  <hr />
                  <a
                    href="./forgot-password.html"
                    className="card-link link-underline-light"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
