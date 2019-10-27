import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Gifts from './pages/Gifts';
import Causes from './pages/Causes';
import ViewCard from './pages/ViewCard';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Nav className="navbar"/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route exact path="/gifts" component={Gifts} />
                <Route exact path="/causes" component={Causes} />
                <Route exact path="/cards" component={ViewCard} />
            </Switch>
            <Footer />
        </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
