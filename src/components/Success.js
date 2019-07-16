import React, { Component } from 'react'
export default class Success extends Component {
    render() {
        return (
            <div className="container pt-5">

                <div className="row pt-5">
                    <div className="col-md-6 offset-md-3">
                        <div className="text-center d-flex ">
                            <img src="/success.png" />
                            <h3 className="ml-4 my-auto">Succesfull Loged</h3>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}