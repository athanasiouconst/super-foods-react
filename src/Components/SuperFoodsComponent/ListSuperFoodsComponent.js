import React, {Component} from 'react';
import { withRouter } from 'react-router';
import moment from 'moment'

class ListSuperFoodsComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            superFoods: [
                {id: 1, description: 'Superfoods Omegadvance', done: false, targetDate: moment(new Date()).format('DD/MM/YYYY')},
                {id: 2, description: 'Superfoods cod Pure oil', done: false, targetDate:moment(new Date()).format('DD/MM/YYYY')},
                {id: 3, description: 'Hippophae Superfoods', done: false, targetDate: moment(new Date()).format('DD/MM/YYYY')},
                {id: 4, description: 'Superfoods Hippophaes & Papaya', done: false, targetDate: moment(new Date()).format('DD/MM/YYYY')},
                {id: 5, description: 'Superfoods Proviomax', done: false, targetDate: moment(new Date()).format('DD/MM/YYYY')},
            ]
        }
    };


    render() {
        return (
            <>

                <h1>Super Foods</h1>

                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.superFoods.map(
                                superFood =>
                                    <tr key={superFood.id}>
                                        <td>{superFood.description}</td>
                                        <td>{superFood.done.toString()}</td>
                                        <td>{superFood.targetDate.toString()}</td>
                                    </tr>
                            )
                        }


                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default withRouter(ListSuperFoodsComponent);
