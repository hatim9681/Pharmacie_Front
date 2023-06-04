import Admin from './Admin';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function App() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get("/api/villes/all").then((response) => {
            setCities(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this city?")) {
            axios.delete(`/api/villes/delete/${id}`).then(() => {
                setCities(cities.filter((city) => city.id !== id));
            });
        }
    };

    const [nom, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/villes/save", { nom }).then(() => {
            window.location.reload();
        });
    };
    return (
        <div>
            <Admin />

            <div className="container">

                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center mb-4">Creation de Villes</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="serie">Nom</label>
                            <input className="form-control" type="text" id="name"
                                value={nom}
                                onChange={(event) => setName(event.target.value)} />
                        </div>

                        <button id="add" type="submit" className="btn btn-success btn-block">
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
            <div className="row mt-5">
                <div className=" text-center col-md-4 offset-md-4">
                    <h2 className="text-center mb-4">Liste des Villes</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cities.map((city) => (
                                <tr key={city.id}>
                                    <th scope="row">{city.id}</th>
                                    <td>{city.nom}</td>
                                    <td>

                                        <button className="btn btn-danger" onClick={() => handleDelete(city.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
}
export default App;