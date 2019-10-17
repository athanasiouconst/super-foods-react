import {Link} from "react-router-dom";
import React, {Component} from 'react';

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    {this.props.match.params.name} to Super Food's App.
                    <p>You can Manage your Super Foods <span/>
                        <Link to="/superFoods">here</Link></p>
                </div>


            </>
        )
    }
}

export default WelcomeComponent;
