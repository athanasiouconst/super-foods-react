import {Link} from "react-router-dom";
import React, {Component} from 'react';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retrieveMainControllerMessage = this.retrieveMainControllerMessage.bind(this);
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

                        <button className="btn btn-success" onClick={this.retrieveMainControllerMessage}>Message
                        </button>
                    </p>
                </div>

            </>
        )
    }

    retrieveMainControllerMessage() {

    }
}


export default WelcomeComponent;
