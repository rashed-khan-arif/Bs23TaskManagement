import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";
import { Plus } from 'react-bootstrap-icons';

const Tasks = () => {
    return (
        <Row>
            <Row>
                <Col>
                    <Link to={"create"}>
                        <Button type="button">
                            <Plus color="white" size={28} /> Create Task
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
                                <th>Title</th>
                                <th>Description</th>
                                <th>Assign to</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Row>
    )

}

export default Tasks;