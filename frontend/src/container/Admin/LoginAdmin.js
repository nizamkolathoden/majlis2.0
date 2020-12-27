import React, { useState } from 'react';

const LoginAdmin = () => {
    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('')
    return (
        <div>
            UserName
            <input type ="text" 
            placeholder="UserName"
            value={username}
            />
            Password
            <input type ="password" 
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
            value={password}
            />
        </div>
    );
};

export default LoginAdmin;