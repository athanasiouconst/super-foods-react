import React, {Component} from 'react';
import {withRouter} from 'react-router';
import moment from 'moment'
import SuperFoodService from "../../api/superFood/SuperFoodService";
import AuthenticationService from "../SuperFoodsApp/AuthenticationService";

class ListSuperFoodsComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            superFoods: [],
            message: null
        };

        this.deleteSuperFoodClicked = this.deleteSuperFoodClicked.bind(this);
        this.updateSuperFoodClicked = this.updateSuperFoodClicked.bind(this);
        this.refreshSuperFoods = this.refreshSuperFoods.bind(this);
        this.addSuperFoodClicked = this.addSuperFoodClicked.bind(this);

    };

    componentDidMount() {

        this.refreshSuperFoods();

    }

    refreshSuperFoods() {
        let username = AuthenticationService.getLoggedInUserName();
        SuperFoodService.retrieveAllSuperFood(username)
            .then(response => {
                //console.log(response)
                this.setState({superFoods: response.data})
            })
    }

    //just before the component in unmount
    componentWillUnmount() {

        //console.log("componentWillUnmount");

    }

    shouldComponentUpdate(nexrProps, nextState) {

        //console.log("shouldComponentUpdate");
        //console.log(nexrProps);
        //console.log(nextState);

        return true
        //if false react should not render the component through the render method
    }

    deleteSuperFoodClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();

        //console.log(username, id);
        SuperFoodService.deleteSuperFood(username, id)
            .then(
                response => {
                    this.setState({message: `Delete of Super Food ${id} successfully`});
                    this.refreshSuperFoods();
                }
            )

    }

    updateSuperFoodClicked(id) {

        this.props.history.push(`/superFoods/${id}`)

    }

    addSuperFoodClicked() {

        this.props.history.push(`/superFoods/-1`)

    }

    render() {
        return (
            <>

                <h1>Super Foods</h1>
                {this.state.message && <div className="alert alert-success"> {this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed</th>
                            <th>Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.superFoods.map(
                                superFood =>
                                    <tr key={superFood.id}>
                                        <td>{superFood.description}</td>
                                        <td>{superFood.done.toString()}</td>
                                        <td>{moment(superFood.targetDate).format('DD/MM/YYYY')}</td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updateSuperFoodClicked(superFood.id)}> Update
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deleteSuperFoodClicked(superFood.id)}> Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }


                        </tbody>
                    </table>

                    <div className="row">
                        <button className="btn btn-success" onClick={this.addSuperFoodClicked}>Add</button>
                    </div>

                </div>
            </>
        )
    }
}

export default withRouter(ListSuperFoodsComponent);
