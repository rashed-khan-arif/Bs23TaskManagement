import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MainNav() {
    return (
        <Navbar className='nav'>
            <Container>
                <Navbar.Brand href="/"> <img
                    alt="Logo"
                    src="https://react-bootstrap.github.io/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                    Task Manager
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/tasks">Tasks</Nav.Link>
                        <Nav.Link href="/members">Members</Nav.Link>
                        <Nav.Link href="#home">
                            <Navbar.Text>
                                <a href="#login">Rashed</a>
                            </Navbar.Text>
                        </Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;