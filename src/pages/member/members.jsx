import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Plus } from 'react-bootstrap-icons';
import {
    Link
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

const Members = () => {
    const members = useSelector((state) => state.member.members)

    return (
        <Row>
            <Row>
                <Col>
                    <Link to={"create"}>
                        <Button type="button">
                            <Plus color="white" size={24} /> Create Member
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Task Assigned</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members && members.map(m => (
                                    <tr>
                                        <td>1</td>
                                        <td>{m.name}</td>
                                        <td>5</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Row>
    )

}

export default Members;