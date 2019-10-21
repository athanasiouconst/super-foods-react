import {Link} from "react-router-dom";
import React, {Component} from 'react';
import SuperFoodService from "../../api/superFood/SuperFoodService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retrieveMainControllerMessage = this.retrieveMainControllerMessage.bind(this);
        this.retrieveMainControllerBeanMessage = this.retrieveMainControllerBeanMessage.bind(this);
        this.retrieveMainControllerPathBeanMessage = this.retrieveMainControllerPathBeanMessage.bind(this);

        this.handleSuccessfulResponce = this.handleSuccessfulResponce.bind(this);
        this.handleSuccessfulBeanResponce = this.handleSuccessfulBeanResponce.bind(this);
        this.handleSuccessfulPathBeanResponce = this.handleSuccessfulPathBeanResponce.bind(this);

        this.state = {
            welcomeMessage: ''
        }
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    {this.props.match.params.name} to Super Food's App.
                    <p>You can Manage your Super Foods <span/>
                        <Link to="/superFoods">here</Link></p>
                </div>
                <div className="container">
                    <p>Main Controller from Spring Boot App</p>
                    <p>You can fetch your message form Spring Boot App by clicking <span/>


                    </p>
                    <button className="btn btn-success" onClick={this.retrieveMainControllerMessage}>Message</button>
                    <button className="btn btn-success" onClick={this.retrieveMainControllerBeanMessage}>Message
                    </button>
                    <button className="btn btn-success" onClick={this.retrieveMainControllerPathBeanMessage}>Message
                    </button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}

                </div>

            </>
        )
    }

    retrieveMainControllerMessage() {

        SuperFoodService.executeSuperFoodService()
            .then(response => this.handleSuccessfulResponce(response))
        ;
    }

    retrieveMainControllerBeanMessage() {

        SuperFoodService.executeSuperFoodBeanService()
            .then(response => this.handleSuccessfulBeanResponce(response))
        ;
    }

    retrieveMainControllerPathBeanMessage() {

        SuperFoodService.executeSuperFoodPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulPathBeanResponce(response))
        ;
    }

    handleSuccessfulResponce(responce) {
        this.setState({welcomeMessage: responce.data}
        )
    }

    handleSuccessfulBeanResponce(responce) {
        this.setState({welcomeMessage: responce.data.message}
        )
    }

    handleSuccessfulPathBeanResponce(responce) {
        this.setState({welcomeMessage: responce.data.message}
        )
    }
}


export default WelcomeComponent;
