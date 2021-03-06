import React from 'react';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faIndustry, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FooterContainer = (props) => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Seguinos en nuestras redes:</span>
                </div>
                <div>
                    <a href="#/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="#/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#/" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <FontAwesomeIcon icon={faIndustry} /> Canning Paradise
                            </h6>
                            <p>
                                Canning Paradise te acerca todos los productos y servicios vinculados al enlatado para tu fábrica o punto de venta.
                            </p>
                            <p>
                                Tenemos soluciones aptas para todas las escalas de producción. Desde líneas industriales hasta máquinas y dispositivos de uso personal.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Productos
                            </h6>
                            <p>
                                <Link className="text-reset" to="/category/cerradoras">Cerradoras</Link><br />
                                <Link className="text-reset" to="/category/atmosfericas">Llenadoras atmosféricas</Link><br />
                                <Link className="text-reset" to="/category/isobaricas">Llenadoras isobáricas</Link><br />
                                <Link className="text-reset" to="/category/lineas">Lineas industriales</Link><br />
                            </p>
                            <p>
                            <Link className="text-reset" to="/category/latas">Latas</Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Links útiles
                            </h6>
                            <p>
                                <Link className="text-reset" to="/tyc">Términos y condiciones</Link>
                            </p>
                            <p>
                            <Link className="text-reset" to="/faqs">Preguntas frecuentes</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contacto
                            </h6>
                            <p><FontAwesomeIcon icon={faHome} /> Mar del Plata, Buenos Aires, Argentina</p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> info@canningparadise.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} /> 
                                <a className="text-reset text-decoration-none" href="whatsapp://send?text=Hola! Quiero hacerles una consulta&phone=+54 223 5377049&abid=+54 223 5377049">+ 54 223 5377049</a>
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
