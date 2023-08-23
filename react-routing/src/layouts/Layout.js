import { Container } from "react-bootstrap"; //react bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                {/*React boostrap navigation bar*/}
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/user">User</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="py-4"> {/*React boostrap container | py: padding*/}
                    <Outlet /> {/*To show child element of the releveant page*/}
                </Container>

            </div>

            <footer className="bg-body-tertiary">
                <Container>
                    This is a footer
                </Container>
            </footer>
        </>
    );
}
export default Layout;