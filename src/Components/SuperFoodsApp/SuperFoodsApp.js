import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './SuperFoodsApp.css';
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "../LoginComponent/LoginComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import ListSuperFoodsComponent from "../SuperFoodsComponent/ListSuperFoodsComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import LogoutComponent from "../LogoutComponent/LogoutComponent";
import WelcomeComponent from "../WelcomeComponent/WelcomeComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";


class SuperFoodsApp extends Component {
    render() {
        return (
            <div className="superFoodsApp">
                {/*<h1>Super-Foods App</h1>*/}

                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/superFoods" component={ListSuperFoodsComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout"  component={LogoutComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}></Route>
                        </Switch>

                        <FooterComponent/>
                    </>
                </Router>

                {/*<LoginComponent/>*/}
                {/*<WelcomeComponent/>*/}
            </div>
        );
    }
}



export default SuperFoodsApp;


