import React from 'react';
import Row from 'react-bootstrap/Row';
import {
    Outlet
} from "react-router-dom";

const MemberArea = () => {
    return (
        <Row>
            <Outlet />
        </Row>
    )

}

export default MemberArea;