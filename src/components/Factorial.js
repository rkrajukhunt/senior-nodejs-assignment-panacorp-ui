import React, { Component, } from 'react';
import { factorialService, } from '../services/user';

export default class Factorial extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: '',
            factorial: '',
        };
        this.getFactorial = this.getFactorial.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeNumber(e){
        this.setState({
            number: e.target.value,
        });
    }

    async getFactorial(){
        let result = await factorialService(this.state.number);
        console.log('got result : ', result);
        this.setState({
            factorial: result
        })
    }

    render(){
        console.log('props : ', this.props);
        return (
            <div className="authentication-bg">
                <div className="account-pages">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card mt-4">
                        <div className="card-header pt-3 pb-3 text-center bg-primary">
                            <span className="text-white font-weight-bold h2">Factorial.io</span>
                        </div>
                        <div className="card-body p-4">
                            <div className="text-center w-75 m-auto">
                            <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Find Factorials</h4>
                            </div>
                            <form action="#">
                            <div className="form-group">
                                <label for="num">Number</label>
                                <input
                                className="form-control"
                                type="text"
                                id="num"
                                onChange={this.changeNumber}
                                value={this.state.number}
                                placeholder="Enter a number"
                                />
                            </div>
                            <hr />
                            <h4
                                className="text-dark-50 text-center mt-0 font-weight-bold">
                                Factorial : {this.state.factorial}
                            </h4>
                            <hr />
                            <div className="form-group mb-0 text-center">
                                <button
                                    className="btn btn-primary mr-3"
                                    type="submit"
                                    onClick={this.getFactorial}>
                                    Find Factorial
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}