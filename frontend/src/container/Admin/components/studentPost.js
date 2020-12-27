import React, { useState } from 'react';

const StudentPost = () => {
    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [admno, setAdmno] = useState('');
    const [sem, setSem] = useState('');

    const Studentpost = () => {

        fetch('/admin/poststudent', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                batch,
                admno,
                sem
            })

        }).then(res => res.json()).then(data => alert(JSON.stringify(data)))
    }
    return (
        <div>


            Name
            <input type='text'
                placeholder='name'
                value={name}
                onChange={e => setName(e.target.value)} />
               Batch
            <input type='text'
                placeholder='batch' value={batch}
                onChange={e => setBatch(e.target.value)}
            />
               AddmissionNumber
            <input type='text'
                placeholder='addmission number'
                value={admno}
                onChange={e => setAdmno(e.target.value)}
            />

                Semaster
            <input type='text'
                placeholder='semaster'
                value={sem}
                onChange={e => setSem(e.target.value)}
            />
            <button onClick={() => Studentpost()}>submit</button>

        </div>
    )
};

export default StudentPost;