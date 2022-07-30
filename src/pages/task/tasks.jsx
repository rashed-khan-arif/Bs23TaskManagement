import React from 'react';

import {
    Link
} from "react-router-dom";

const Tasks = () => {
    return (
        <div>
            <h1>Tasks</h1>
            <div className="content">
                <ul>
                    <li>
                        <Link to="10">Task 1</Link>
                    </li>
                    <li>
                        <Link to="10">Task 2</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Tasks;