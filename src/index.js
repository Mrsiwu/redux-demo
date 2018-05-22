import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware,compose } from 'redux';
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


import './index.css';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers.js';
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';


const store = createStore(reducers, compose( 
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
)); 






ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route path='/login' exact component={Auth}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Redirect to='/dashboard'></Redirect>    
        </Switch>  
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
registerServiceWorker();



