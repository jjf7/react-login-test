import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';


class Login extends Component {

    state = {
        login: '',
        password: '',
        status: true,
        redirectToReferrer: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.login == "linktic" && this.state.password == "12345678") {
            this.setState({ status: false });
            console.log({ "Auth": "Denied" });
        } else {
            this.setState({
                status: true,
                redirectToReferrer:true
            });
            console.log({ "Auth": "Logged", "Language": "EN" });


        }

        this.setState({ login: '', password: '' });
    }


    loginFaile() {
        return {
            border: !this.state.status ? "1px solid #C00" : ""
        }
    }

    render() {


        if (this.state.redirectToReferrer) return <Redirect to={"/twosteep"} />;


            return (<div className="container pt-5">

                <div className="row  pt-5">

                    <div className="col-md-4 offset-md-4  pt-5">

                        <div className="card border-white">

                            <div className="card-header d-flex bg-white border-white">
                                <img src="logo.svg" className=" noun_Fire_2475241" alt="Test - Login :: Jose Fuentes" />

                                <h5 className="ml-4 my-auto">Login</h5>

                            </div>

                            <div className="card-body ">

                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input required type="text" name="login" style={this.loginFaile()} onChange={this.onChange} autoFocus className="form-control rounded-lg" placeholder="Login" value={this.state.login} />
                                    </div>

                                    <div className="form-group">
                                        <input required type="password" name="password" onChange={this.onChange} className="form-control rounded-lg" placeholder="Password" value={this.state.password} />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary float-right font-weight-bold rounded"> Login </button>
                                    </div>
                                </form>

                            </div>

                        </div>

                        <div className="pt-5">
                            <p className="text-secondary pb-3 "> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>

                            <div className="text-center "><button className="border rounded-pill p-2 bg-white w-50 "><img src="shape.png"></img></button></div>
                        </div>

                    </div>

                </div>

            </div>)
    }
}

export default Login;