import React, { Component } from 'react'
import { Route ,withRouter} from 'react-router-dom';
class Twosteep extends Component {

    state = {
        twostep: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        window.location="/success";

    }

    onChange = (e) => {
        this.setState({ twostep: e.target.value });
    }
    render() {
        return (
            <div className="container pt-5">

                <div className="row  pt-5">

                    <div className="col-md-4 offset-md-4  pt-5">

                        <div className="card border-white">

                            <div className="card-header d-flex bg-white border-white">
                                <img src="logo.svg" className=" noun_Fire_2475241" alt="Test - Login :: Jose Fuentes" />

                                <h5 className="ml-4 my-auto">Login</h5>

                            </div>

                            <p className="text-secondary"> Two seep autentication required for this login for this user login  </p>

                            <div className="card-body ">

                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input required type="text" name="twostep" onChange={this.onChange} autoFocus className="form-control rounded-lg" placeholder="Enter two step auth code" />
                                    </div>


                                    <div className="form-group text-center pt-2">
                                        <button type="submit" className="btn btn-light bg-white   rounded-pill w-50 text-primary border"> Continue </button>
                                    </div>
                                </form>

                            </div>

                        </div>



                    </div>

                </div>

            </div>
        )
    }
}

export default withRouter (Twosteep);