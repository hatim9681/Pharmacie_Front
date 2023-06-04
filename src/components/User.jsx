import Admin from './Admin';
function App() {
    return (
        <div>
            <Admin/>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"
            />
            
            
            <div className="row mt-5">
                <div className=" text-center col-md-6 offset-md-3">
                    <h2 className="text-center mb-4">Liste des Utilisateurs</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>

                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                

                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">a</th>
                                <td>a</td>
                                
                                <td>a</td>
                                <td>a</td>


                                <td>
                                    
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