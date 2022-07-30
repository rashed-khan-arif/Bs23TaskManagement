import React from 'react';
import Container from 'react-bootstrap/Container';
import MainNav from '../components/MainNav';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container>
            <MainNav />
            <main>
                <div className='content'>
                    <Outlet />
                </div>
            </main>
        </Container>
    )

}

export default Layout;