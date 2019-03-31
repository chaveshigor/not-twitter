import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/login';
import TimeLine from './pages/timeline/timeline';

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/timeline' component={TimeLine} />
                </Switch>
            </BrowserRouter>
        )
    }
}