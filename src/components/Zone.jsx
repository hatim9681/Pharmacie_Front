import Admin from './Admin';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
    const [nom, setName] = useState("");
    const [cityId, setCityId] = useState("");
    const [zones, setZones] = useState([]);

    const [cities, setCities] = useState([]);
    const handleDelete = (zoneId) => {
        if (window.confirm("Are you sure you want to delete this zone?")) {
            axios.delete(`/api/zone/delete//${zoneId}`).then(() => {
                setZones(zones.filter((zone) => zone.id !== zoneId));
            });
        }
    };
useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/zone`);
            setZones(result.data);
        };
        fetchData();
    }, [cityId]);
    useEffect(() => {
        axios.get("/api/villes/all").then((response) => {
            setCities(response.data);
        });
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/zone/save", {
            nom,
            ville: {
                id: cityId
            }
        }).then((response) => {
            //onZoneAdded(response.data);
            setName("");
            setCityId("");
            window.location.reload();
        });
    };

    return (
        <div>
            <Admin />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"
            />
            <div className="container">

                <div className=" col-md-8 offset-md-2">
                    <h1 className="text-center mb-4">Creation de Zones</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="serie">Nom</label>
                            <input className="form-control" type="text" id="name"
                                value={nom}
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="specialite">Ville</label>
                            <select className="form-control" id="cityId"
                                value={cityId}
                                onChange={(event) => setCityId(event.target.value)}>
                                <option value="">Select a city </option>
                                {cities && cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.nom}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button id="add" type="submit" className="btn btn-success btn-block">
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
            <div className="row mt-5">
                <div className=" text-center col-md-4 offset-md-4">
                    <h2 className="text-center mb-4">Liste des Zones</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Ville</th>
                                
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {zones.map((zone) => (
                        <tr key={zone.id}>
                            <td>{zone.id}</td>
                            <td>{zone.nom}</td>
                            <td>{zone.ville && zone.ville.nom}</td>
                           
                            <td>
                                <button className="btn btn-danger " onClick={() => handleDelete(zone.id)}>
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