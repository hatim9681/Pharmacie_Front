

function App() {
    return (

        <>


            <div className="container">
                <div className="heading">
                    <h1 className="text-center fw-bold">
                        Explore Your Closest Pharmacie
                    </h1>
                </div>
                <h5 className="text-center">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                .search_box {
                  display: flex;
                  justify-content: space-between; /* Add space between elements */
                  align-items: center; /* Vertically center the elements */
                  margin-bottom: 20px; /* Add margin bottom for spacing */
                }
                .search_box .dropdown {
                  width: 200px;
                }
                .search_box .btn {
                  width: 30%;
                }
              `,
                        }}
                    />
                    
                  
                    <div className="wrapper">
                        <div className="search_box">
                            <h5>Ville</h5>
                            <select className="dropdown" >
                                <option >Choose----</option>
                                <option value="volvo">Casa</option>

                                <option value="Rabat">Rabat</option>
                                <option value="Marrakech">Marrakech</option>
                                <option value="Tanger">Tanger</option>
                            </select>
                            <h5>Zone</h5>
                            <select className="dropdown" value="Select">
                                <option >Choose----</option>
                                <option value="Gueliz">Gueliz</option>
                                <option value="Massira">Massira</option>
                                <option value="Hay Riad">Hay Riad</option>
                                <option value="Audi">Audi</option>
                            </select>
                            <h5>Garde</h5>
                            <select className="dropdown">
                                <option >Choose----</option>
                                <option value="Jour">Jour</option>
                                <option value="Nuit">Nuit</option>

                            </select>
                            <a

                                className="btn btn-secondary btn-lg"
                                style={{ width: "30%" }}
                            >
                                Search
                            </a>
                        </div>
                    </div>
                  


                </h5>
                <div className="container ">
                <div className="row ">
                  
                
                <div className="col-lg-4 col-md-6 col-sm-12 custom-column">
                        <div className="card">
                            <img
                                src="https://api.monpharmacien.sobrus.com/images/pharmacies/545e7e3268ec3ac2f5cc8d6550a74fe9.jpeg"
                                className="card-img-top custom-img-size"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Pharmacie Kawazami</h2>
                                <p className="card-text">Garde : Jour</p>
                                <div className="text-center">
                                    <a

                                        className="btn btn-success btn-lg"
                                        style={{ width: "100%" }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> <div className="col-lg-4 col-md-6 col-sm-12 custom-column">
                        <div className="card">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="card-img-top custom-img-size"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Pharmacie Karem</h2>
                                <p className="card-text">Garde : Nuit</p>
                                <div className="text-center">
                                    <a

                                        className="btn btn-success btn-lg"
                                        style={{ width: "100%" }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> <div className="col-lg-4 col-md-6 col-sm-12 custom-column">
                        <div className="card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDDKE-_G3poFsa77tpmAn8BxnDcg0-Q2OSbx9lVV7H9sfLUZUhnGgeIF8CYqK5auM_I8&usqp=CAU"
                                className="card-img-top custom-img-size"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Pharmacie Saada</h2>
                                <p className="card-text">Garde : Nuit</p>
                                <div className="text-center">
                                    <a

                                        className="btn btn-success btn-lg"
                                        style={{ width: "100%" }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> <div className="col-lg-4 col-md-6 col-sm-12 custom-column">
                        <div className="card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNzqceBB6tHYgJu_q4Fin3B6ZzIGLAHo6emN2DeJfyiIA7O3682Kh0BlQ6cgK9UZAgvo&usqp=CAU"
                                className="card-img-top custom-img-size"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Pharmacie Tdal</h2>
                                <p className="card-text">Garde : Jour</p>
                                <div className="text-center">
                                    <a

                                        className="btn btn-success btn-lg"
                                        style={{ width: "100%" }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> <div className="col-lg-4 col-md-6 col-sm-12 custom-column">
                        <div className="card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91grs-RyJaTUHzIwATu6u4ITAuZWnXvSK9N8t8J4E5Bhty2Lko45I_DbG1ApN3Xy-9Fo&usqp=CAU"
                                className="card-img-top custom-img-size"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Pharmacie Agha</h2>
                                <p className="card-text">Garde : Nuit</p>
                                <div className="text-center">
                                    <a

                                        className="btn btn-success btn-lg"
                                        style={{ width: "100%" }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div> <div className="col-lg-4 col-md-6 col-sm-12 custom-column">
                        <div className="card">
                            <img
                                src="https://france3-regions.francetvinfo.fr/image/ZJZa-tpnSn6WpLBYm7ehODcUrUc/1200x1200/regions/2020/06/09/5edef1111c1a5_pharma_3.jpg"
                                className="card-img-top custom-img-size"
                            />
                            <div className="card-body">
                                <h2 className="card-title">Pharmacie Imane</h2>
                                <p className="card-text">Garde : Jour</p>
                                <div className="text-center">
                                    <a

                                        className="btn btn-success btn-lg"
                                        style={{ width: "100%" }}
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                
            </div>


        </>
    );
};


export default App;
