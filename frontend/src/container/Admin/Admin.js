import React from 'react';
import StudentPost from './components/studentPost';
import { BrowserRouter, Route, useHistory } from 'react-router-dom'
const Admin = () => {
    return (
        <div>
            <StudentPost/>
        </div>
    );
};

export default Admin;