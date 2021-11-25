import React from 'react'

const FooterContainer = (props) => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Seguinos en nuestras redes:</span>
                </div>
                <div>
                    <a href="#/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Canning Paradise
                            </h6>
                            <p>
                                Canning Paradise te acerca todos los productos y servicios ...
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#/" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#/" className="text-reset">React</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Usefull links
                            </h6>
                            <p>
                                <a href="#/" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#/" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#/" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#/" className="text-reset">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home mx-3"></i>Mar del Plata, Buenos Aires, Argentina</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@canningparadise.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3"></i>
                                + 54 223 5377049
                            </p>
                            <p>
                                <i className="fas fa-print me-3"></i>
                                + 54 223 5377049
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{background: 'rgba(0,0,0,0.05)'}}>
                2021 Copyright:
                <a className="text-reset fw-bold mx-1" href="#/">CanningParadise.com</a>
            </div>
        </footer>
    )
}

export default FooterContainer
