import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Forms from './Pages/Forms';

function Routes (){
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Forms} path="/cadastro" /> 
        </BrowserRouter>
    )
}

export default Routes;