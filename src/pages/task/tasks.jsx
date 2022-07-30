import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";
import { Plus } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux'

const Tasks = () => {
    const { tasks } = useSelector((state) => state.task)

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
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Assign to</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks && tasks.map(a => (
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.title}</td>
                                        <td>{a.description}</td>
                                        <td>@mdo</td>
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

export default Tasks;