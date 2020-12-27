import React, { useContext } from 'react';
import { userContext } from '../User'
const Profile = () => {
    const { state, dispatch } = useContext(userContext)
    return (
        <div>
            <div className='row'>
                <h4>Name:{state ? state.name : 'Loading'}</h4>
                <div>
                    <h5>Class:{state ? state.batch : 'Loading'}</h5>
                    <h6>Addmision Number:{state ? state.admno : 'Loading'}</h6>
                    <h6>semaster :{state ? state.sem : 'Loading'}</h6>
                </div>
            </div>
        </div>

    );
};

export default Profile;