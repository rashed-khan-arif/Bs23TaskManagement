import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const CreateTask = () => {
    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter task title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Assign to
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >Rashed</Dropdown.Item>
                                <Dropdown.Item >Arif</Dropdown.Item>
                                <Dropdown.Item >Faisal</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save Task
                    </Button>
                </Form>
            </Col>
            <Col></Col>
        </Row>
    )

}

export default CreateTask;