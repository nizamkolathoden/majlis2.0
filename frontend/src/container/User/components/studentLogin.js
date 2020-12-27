import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import {userContext} from '../User'
const Studentlogin = () => {
    //intilize context
    const {state,dispatch} = useContext(userContext)
    const history = useHistory()
    const [admno, setAdmno] = useState('')
    const login = () => {
        fetch('/auth/login', {
            method: 'Post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                admno
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.error){
                alert(data.error)
            }
            if (data.token!==undefined) {
                //localstorage token name Token_majlis
                localStorage.setItem("Token_majlis", JSON.stringify(data.token))
                //localstorge user user_majlis
                localStorage.setItem("user_majlis",JSON.stringify(data.user))
                dispatch({type:'USER',payload:data.user})
                history.push('/user')
            }

        }
        )

    }

    return (
        <div>
            Addmission Number
            <input type='text'
                placeholder="Enter your Admission Number"
                onChange={e => setAdmno(e.target.value)}
                value={admno}
            />
            <button className="btn"  onClick={login}>Login</button>
        </div>
    );
};

export default Studentlogin;