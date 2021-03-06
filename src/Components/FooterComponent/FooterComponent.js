import React, {Component} from 'react';
import { withRouter } from 'react-router';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2019 @Athanasiou</span>
                </footer>
                <hr/>
            </div>
        )
    }
}

export default withRouter(FooterComponent);
