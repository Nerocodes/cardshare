import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import HowItWorks from './pages/HowItWorks';
import Gifts from './pages/Gifts';
import Causes from './pages/Causes';
import ViewCard from './pages/ViewCard';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/gifts" component={Gifts} />
        <Route path="/causes" component={Causes} />
        <Route path="/cards" component={ViewCard} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
