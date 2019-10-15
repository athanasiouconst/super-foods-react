import React, {Component} from 'react';
import './SuperFoodsApp.css';

class SuperFoodsApp extends Component {
    render() {
        return (
            <div className="superFoodsApp">
                <h1>Super-Foods App</h1>
                <LoginComponent/>
            </div>
        );
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'costas',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value }
        )
    }

    handleUsernameChange(event) {
        this.setState({[event.target.value]: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({[event.target.value]: event.target.value})
    }

    loginClicked() {

        if (this.state.username === 'costas' && this.state.password === '1234') {
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})

        } else {
            this.setState({showSuccessMessage: false})

            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return (
            <div>

                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage}/>


                <p>Username: <input type="text" name="username" value={this.state.username}
                                    onChange={this.handleChange}/></p>
                <p>Password: <input type="password" name="password" value={this.state.password}
                                    onChange={this.handleChange}/></p>
                <p>
                    <button onClick={this.loginClicked}>Login</button>
                </p>
            </div>
        );

    }
}

function ShowInvalidCredentials(props){

    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowValidCredentials(props){

    if(props.showSuccessMessage){
        return <div>Login Sucessful</div>
    }
    return null
}

export default SuperFoodsApp;
