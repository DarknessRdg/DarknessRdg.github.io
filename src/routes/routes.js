import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from '../components/Nav'
import Home from '../pages/Home'


const Routes = () => (
    <BrowserRouter>
        <Route path='/' component={Nav} />

        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
        
        
    </BrowserRouter>
)


export default Routes