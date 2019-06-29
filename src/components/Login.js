import React, { Component } from 'react';

export default class Login extends Component {
    render(){
        if(!(this.props.user && (this.props.user.userName || this.props.user.userName === ''))) return null;
        const { changePassword, changeUserName, } = this.props;
        const { userName, password, } = this.props.user;
        return (
            <div className="authentication-bg">
                <div className="account-pages">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-5 mb-5">
                        <div className="card mt-5">
                        <div className="card-header pt-3 pb-3 text-center bg-primary">
                            <span className="text-white font-weight-bold h2">Factorial.io</span>
                        </div>
                        <div className="card-body p-4">
                            <div className="text-center w-75 m-auto">
                            <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Sign In</h4>
                            </div>
                            <form action="#">
                            <div className="form-group">
                                <label for="uname">User Name</label>
                                <input
                                className="form-control"
                                type="text"
                                id="uname"
                                onChange={changeUserName}
                                value={userName}
                                placeholder="Enter your user name"
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                className="form-control"
                                type="password"
                                required
                                value={password}
                                onChange={changePassword}
                                id="password"
                                placeholder="Enter your password"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox-signin"
                                    checked
                                />
                                <label className="custom-control-label" for="checkbox-signin">Remember me</label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-center">
                                <button
                                    className="btn btn-primary mr-3"
                                    type="submit"
                                    onClick={this.props.login}>
                                    Log In
                                </button>
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    onClick={this.props.signUp}>
                                    Sign Up
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