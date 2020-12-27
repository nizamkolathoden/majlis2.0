import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import User from './User/User'
import Home from './Home'
import Admin from './Admin/Admin'
const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Route exact path="/admin">

                    <Admin />
                </Route>

                <Route exact path="/">

                    <Home />
                </Route> 

                <Route path='/user'>
                    <User />
                </Route>

            </BrowserRouter>


        </div>
    );
};

export default App;