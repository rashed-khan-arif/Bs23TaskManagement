import React from 'react';
import {
    Link,
    Outlet,
} from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <div className="content">
                <nav className="nav">
                    <p style={{ float: 'left' }}>Dashboard</p>
                    <div style={{ float: 'right' }}>
                        <Link to="tasks">Tasks</Link> |{" "}
                        <Link to="members">Members</Link>
                    </div>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )

}

export default Layout;