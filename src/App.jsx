import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login"
import {
    Routes,
    Route
} from "react-router-dom";
import Layout from './pages/Layout';
import Members from './pages/member/members';
import Tasks from './pages/task/tasks';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="members" element={<Members />} />
                    <Route path="tasks" element={<Tasks />} />
                </Route>

                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App;