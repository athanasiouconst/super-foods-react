import React, {Component} from 'react';
import {withRouter} from 'react-router';
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import SuperFoodService from "../../api/superFood/SuperFoodService";
import AuthenticationService from "../SuperFoodsApp/AuthenticationService";


class SuperFoodComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: null,
            targetDate: moment(new Date()).format('DD/MM/YYYY'),
            isDone: true
        };

        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName();
        SuperFoodService.retrieveSuperFood(username, this.state.id)
            .then(response =>

                this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('DD/MM/YYYY')
                })

            )
    }

    validate(values) {

        //let errors = {description: 'Description should have 5 Characters!!'};
        let errors = {};
        if (!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Description should have 5 Characters!!'
        }

        if (!moment(values.targetDate).isValid() && moment(values.targetDate).format('DD/MM/YYYY')) {
            errors.targetDate = 'Enter a valid Date'
        }

        return errors;
    }

    onSubmit(values) {

        let username = AuthenticationService.getLoggedInUserName();

        let superFood = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        };

        if (this.state.id === -1) {

            SuperFoodService.addSuperFood(username, superFood).then(
                () => {
                    this.props.history.push(`/superFoods/`)
                }
            )
        }else{
            SuperFoodService.updateSuperFood(username, this.state.id, superFood).then(
                () => {
                    this.props.history.push(`/superFoods/`)
                }
            )
        }




    }


    render() {

        // let description = this.state.description;
        // let targetDate = this.state.targetDate;

        let {description, targetDate} = this.state;

        return (
            <>

                <div>Super Food for id {this.props.match.params.id}</div>

                <h1>Super Food</h1>
                <div className="container">
                    <Formik
                        initialValues={{description, targetDate}}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                    >

                        {
                            (props) => (

                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>

                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>


                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"  ></Field>

                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }

                    </Formik>
                </div>
            </>
        )
    }
}

export default withRouter(SuperFoodComponent);
