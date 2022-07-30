import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login Page</h1>
            <Button
                onClick={(e) => {
                    navigate("/", { replace: true });
                }}
            >
                Login
            </Button>
        </div >
    );
}