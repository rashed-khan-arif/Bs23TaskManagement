import React from 'react';
import {
    Link
} from "react-router-dom";
const Members = () => {
    return (
        <div>
            <h1>Members</h1>
            <div className="content">
                <ul>
                    <li>
                        <Link to="10">Rashed</Link>
                    </li>
                    <li>
                        <Link to="10">Arif</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Members;