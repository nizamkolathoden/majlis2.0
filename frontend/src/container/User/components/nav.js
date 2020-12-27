import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../User'

const Navbar = () => {
    const { state, dispatch } = useContext(userContext);
    const history = useHistory()
    const renderList = () => {
        if (state) {
            return [
                <li>
                    <Link to="/user/profile">Profile</Link></li>,
                <li
                    onClick={() => {
                        localStorage.removeItem("user_majlis")
                        localStorage.removeItem("Token_majlis")

                        dispatch({ type: "CLEAR" })

                        history.push('/user/login')
                    }}>Logout</li>
            ]
        } else {
            return <li style={{cursor:"pointer"}}><Link to="/user/login">Login</Link></li>
        }

    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to={state ? "/user" : "/user/login"} className="brand-logo left">Majlis</Link>
                    <ul id="nav-mobile" className="right">
                        {renderList()}




                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;