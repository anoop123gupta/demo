import React from 'react';
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Login from './components/login';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div>
                <Router>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <ul class="nav navbar-nav">
                                <li > <Link  to="/" > Home </Link></li>
                                <li> <Link  to="/about" > about </Link></li>
                                <li> <Link  to="/contact" > contact </Link></li>
                                <li> <Link  to="/login"> Login </Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={Home} ></Route>
                    <Route path="/about"  component={About} ></Route>
                    <Route path="/contact"  component={Contact} ></Route>
                    <Route path="/login"  component={Login} ></Route>
                </Router>
            </div>
        )
    }
}
