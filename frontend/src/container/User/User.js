import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { BrowserRouter, Route, useHistory } from 'react-router-dom'
import Showcourse from './components/Showcourse';
import NavBar from './components/nav'
import Studentlogin from './components/studentLogin';
import TeacherProfile from './components/TeacherProfile'
import Profile from './components/Profile'
import { intialstate, reducer } from '../reducer/usereducer'
export const userContext = createContext()


const Routing = () => {
    const history = useHistory()
    
    const { state, dispatch } = useContext(userContext);
          
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user_majlis'));
        if (user) {
            dispatch({ type: 'USER', payload: user });
            console.log(user);
        } else {
            history.push('/user/login')
        }
    }, [])


    return (
        <div>
            <Route exact path='/user'>
                <Showcourse />
            </Route>
          
            <Route path='/user/login'>
                <Studentlogin />
            </Route>

            <Route path='/user/profile'>
                <Profile />
            </Route>

            <Route path='/teacher/:id'>
                <TeacherProfile />
            </Route>
        </div>
    )
}



const User = () => {

    const [state, dispatch] = useReducer(reducer, intialstate)

    return (

        <div>
            {//if you guyz didn't pass 2{} this will show  fucking error message  dispatch is not function it will be a big headache 
}
            <userContext.Provider value={{state, dispatch}}>

                <BrowserRouter>
                <NavBar/>
                    <Routing/>
                </BrowserRouter>
            </userContext.Provider>
        </div>
    )
}

export default User