import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-info">
                <footer className="page-footer font-small blue pt-3">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 mt-md-5">
                                <p className="fw-bold text-uppercase fs-1">SUNSHINE TOURS</p>
                                <p className="fw-bold text-uppercase fs-4"><span className="bg-light rounded-1">Trave your Dream</span></p>
                            </div>
                            <div className="col-sm-3 col-md-3 mb-md-0 mb-3 mt-5">
                                <h5 className="text-uppercase fw-bold">Follow Us:</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Teitter</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-md-3 mb-md-0 mb-3 mt-5">
                                <h5 className="text-uppercase fw-bold">Quick Links:</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Private Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Webmail</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">© 2020 Copyright: <span className="fs-6 fw-bold">www.sunshine@tours.com</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;