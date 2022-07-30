import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addTask } from "../../store/slices/taskSlice"
import { toastr } from 'react-redux-toastr'
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { members } = useSelector((state) => state.member)
    const { taskAdeed, tasks } = useSelector((state) => state.task)
    const [task, setTask] = useState({ title: "", description: "", memberId: 0 })
    const [selectedMember, setSelectedMember] = useState({ label: "", value: "" })

    const handleChange = (obj) => {
        setTask((st) => ({ ...st, ...obj }))
    }

    const submitTask = () => {
        console.log("Saving task...")
        dispatch(addTask({ ...task, memberId: selectedMember.value }))
    }

    useEffect(() => {
        console.log(tasks)
        console.log(taskAdeed)
        if (taskAdeed) {
            toastr.success('', 'Task added successfully')
            navigate("/tasks", { replace: true });
        };
    }, [taskAdeed])

    return (
        <Row>
            <Col>
                <Form
                    onSubmit={(ev) => {
                        ev.preventDefault()
                        submitTask()
                    }}
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"
                            onChange={(e) => {
                                handleChange({ title: e.target.value })
                            }}
                            value={task.title}
                            placeholder="Enter task title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(e) => {
                                handleChange({ description: e.target.value })
                            }}
                            value={task.description}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select member</Form.Label>
                        <Select
                            value={selectedMember}
                            options={members.map(a => ({ label: a.name, value: a.id }))}
                            onChange={(opt) => {
                                setSelectedMember(opt)
                            }}
                        />
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