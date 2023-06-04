
import { Link } from 'react-router-dom'
function App() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"
            />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADnCAMAAACg5dOkAAAAclBMVEX39/cAiAAAAAAAiwD///8AjgD8/PwAggC8vLzh4eEAagAAEgAAUwAmJiZoaGj6+vqhoaHPz887OzsAeAAAMwAAYwDz8/Onp6cTExMAKAAAMQAAbgAeHh64uLjr6+sACQAASQBfX1/a2toATgAAXwBNTU0HnswbAAABz0lEQVR4nO3dSVJCQRBAQT4ITijOE0443P+KblwIERKh1Ra/JN8FujJ6Xd2DgSRJ2sYmLds0ZrnZ9UnDHjfNWWpyM2zY/mzTnq9NjtjY2LL6tN1exLrrsW0+HkUadz22HYy6ULtsubGxseXFxsaWFxsbW15sbGx5sbGx5cXGxpYXGxtbXmxsbHmxsbHlxcbGlhcbG1tebGxsebGxsf1oulA7bW2NV8z2Yt23tF2HRnlYXTG7GraokS3Y6YztZ7Gx/b5vbIehhvOo7Sk4wDrb7jhUkNZ1sePHa23n0eE22oitZGw1Y6sZW83YasZWM7aasdWMrWZsNWOrGVvN2GrGVjO2mrHVjK1mbDVjqxlbzdhqxlYztpqx1YytZmw1Y6sZW83YasZWsy22xT4Ci08X+4dsre15Guk1fO2h46fTtbZgvd7JDMbG9vu2yTY4jnXT0rYIjbJ4WbXtxGr6xsdjbJbWr5/0+m2WWGxsbHmxsbHlxcbGlhcbG1tebGxsebGxseXFxsaWFxsbW15sbGx5sbGx5cXGxpYXGxtbXmxsbHltgW0eWzEbdT22vV7GeuuxrVFsWbEVtd3/Y9v7WbuO+mWLrpj96ZKXJEmSJKnffQDtTts8MduGYAAAAABJRU5ErkJggg=="
                                height={40}
                                alt="MDB Logo"
                                loading="lazy"
                            />
                            <li className="nav-item">

                                Localisation Des Pharmacies

                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex align-items-center">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home
                                    </Link> </li>
                                <li className="nav-item">
                                <Link to="/pharmacie" className="nav-link">Administration
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/loc" className="nav-link">Map
                                    </Link> </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Reviews
                                    </a>
                                </li>
                                <li className="nav-item">
                                <Link to="/login" className="nav-link">LOGIN
                                    </Link> 
                                </li>

                            </ul>

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                className="rounded-circle"
                                height={50}

                            />
                        </div>
                    </div>
                </div>
            </nav >
        </>


    );
};


export default App;
