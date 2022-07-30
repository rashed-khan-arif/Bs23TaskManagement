import React from 'react';
import {
    Link,
    Outlet,
} from "react-router-dom";
import MainNav from '../components/MainNav';
const Layout = () => {
    return (
        <div>
            <div className="content">
                <MainNav />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )

}

export default Layout;