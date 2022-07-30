import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login"
import {
    Routes,
    Route
} from "react-router-dom";
import Layout from './pages/Layout';
import MemberArea from './pages/member';
import Members from './pages/member/members';
import Tasks from './pages/task/tasks';
import CreateTask from './pages/task/createTask';
import DashboardTask from './pages/task/dashBoardTask';
import CreateMember from './pages/member/createMember';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="members" element={<MemberArea />}>
                    <Route index element={<Members />} />
                    <Route path="create" element={<CreateMember />} />
                </Route>
                <Route path="tasks" element={<DashboardTask />}>
                    <Route index element={<Tasks />} />
                    <Route path="create" element={<CreateTask />} />
                </Route>
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default App;