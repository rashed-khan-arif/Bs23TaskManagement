import Nav from 'react-bootstrap/Nav';

function MainNav() {
    return (
        <Nav className="justify-content-end"
            activeKey="/"
        >
            <Nav.Item >
                <Nav.Link eventKey="disabled" disabled>
                    Dashboard
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/tasks">Tasks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/members">Members</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MainNav;