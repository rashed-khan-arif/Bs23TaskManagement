import React from 'react'; 
import Row from 'react-bootstrap/Row'; 
import { 
    Outlet
} from "react-router-dom"; 

const DashboardTask = () => {
    return (
        <Row>
            <Outlet />
        </Row>
    )
}

export default DashboardTask;