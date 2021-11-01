import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Header = () => {


    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    const { uid } = user;

    // console.log(user);
    return (
        <div className="sticky-top">
            <Navbar className="bg-info" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} className="text-black" to="/home">
                        {/* <img width="70px" src="" alt="" /> */}
                        <span className="title">SunShine Tours</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="text-black">
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/services" className="text-black">
                                Services
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="text-black">
                                Contact us
                            </Nav.Link>
                            {
                                user?.email ? (
                                    <>
                                        <Nav.Link as={NavLink} to="/myOrder" className="text-black">
                                            My Orders
                                        </Nav.Link>
                                        <Nav.Link as={NavLink} to="/home" onClick={logOut} className="text-black">
                                            Log out
                                        </Nav.Link>
                                        <Nav.Link as={NavLink} to="/home" className="text-black fw-bold">
                                            {user?.displayName}
                                        </Nav.Link>
                                    </>
                                )
                                    :
                                    <Nav.Link className="text-black" as={NavLink} to="/login">
                                        Log in
                                    </Nav.Link>
                            }
                            {
                                (uid === 'KpGO62jRY8d08UvBV4GSeHulNWR2') && (<Nav.Link className="text-black" as={NavLink} to="/admin">
                                    Admin Panel
                                </Nav.Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;