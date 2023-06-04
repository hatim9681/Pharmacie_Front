import Admin from './Admin';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {

    
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
                    <h1 className="text-center mb-4">Creation de Pharmacie</h1>
                    <form action="" method="get">

                        <div className="form-group">
                            <label htmlFor="serie">Nom</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="serie">Longitude</label>
                            <input className="form-control" type="text" />
                        </div><div className="form-group">
                            <label htmlFor="serie">Latitude</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="serie">Ville</label>
                            <select className="form-control">
                                <option></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="specialite">Zone</label>
                            <select className="form-control" >
                                <option></option>
                            </select>
                        </div>
                        <div className="form-group  ">
                            <label htmlFor="specialite">Garde</label>
                            <select className="form-control" >
                                <option>Jour</option>
                                <option>Nuit</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="serie">Photo</label>
                            <input className="form-control" type="file" />
                        </div>
                        <button id="add" type="submit" className="btn btn-success btn-block">
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
           
            <div className="row mt-5">
                <div className=" text-center col-md-6 offset-md-3">
                    <h1 className="text-center mb-4">Liste des Pharmacies</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>

                                <th scope="col">Zone</th>
                                <th scope="col">Ville</th>
                                <th scope="col">Garde</th>

                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>


                                <td>
                                    <a  className="btn btn-primary btn-sm mr-2">
                                        <i className="fas fa-edit" />
                                        Modifier
                                    </a>
                                    <a href="#" className="btn btn-danger btn-sm">
                                        <i className="fas fa-trash-alt" />
                                        Supprimer
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}
export default App;