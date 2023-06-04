
import { Link } from 'react-router-dom' 

function App() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
     
       
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: 15 }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        LOG IN
                      </h2>
                      <form>
                        <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                            Your Email
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                          />
                        
                          
                        </div>
                        <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                          />
                          
                        </div>
                      
                        
                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            LOG IN
                          </button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">
                          D'ont have already an account?{" "}
                          <Link to="/signup"> <a  className="fw-bold text-body">
                            <u>Register</u>
                          </a>
                          
                                    </Link> 
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
               
            </div>
          </div>
       
      </div>
      
      );
    };


export default App;
