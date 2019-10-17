import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import AuthenticationService from "../SuperFoodsApp/AuthenticationService";


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://co-athanasiou.gr" rel="noopener noreferrer" target="_blank" className="navbar-brand">Constantinos Athansiou</a>
                        </div>

                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/costas">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/superFoods">Super Foods</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>

                    </nav>
                </header>
                <hr/>
            </div>
        )
    }
}

export default withRouter(HeaderComponent);
