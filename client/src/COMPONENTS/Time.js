import React, { Component } from "react";
import "../CSS/Global.css";

class Time extends Component {
  render() {
    return (
      <div className="container-fluid mb-5 px-0 py-5 bg-lt-blue">
        <div className="row p-0 m-0 justify-content-center">
          <h1 className="text-white col-12 text-center">Crowdsale Dashboard</h1>
          <p className="">
            <small>
              <strong className="text-trans-white">
                Total Value: $32,456,241 USD
              </strong>
            </small>
          </p>
        </div>
        <div className="col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 mt-5 mx-auto">
          <div className="row">
            <div className="col-3 border-left-trans-white p-2">
              Sale 25%
              <p className="tiny">Price $0.014</p>
            </div>
            <div className="col-3 border-left-trans-white p-2">
              Sale 10%
              <p className="tiny">Price $0.03</p>
            </div>
            <div className="col-3 border-left-trans-white p-2">
              Sale 7%
              <p className="tiny">Price $0.4285</p>
            </div>
            <div className="col-3 border-left-trans-white p-2">
              Sale 3%
              <p className="tiny">Price $0.1</p>
            </div>
          </div>
          <div className="row bg-trans-white">
            <div style={{height: 10, width:120}}>
              <div
                className="bg-white"
                role="progressbar"
                style={{ height: 10, }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 border-left-trans-white-b p-2">
              <p className="tiny text-trans-white">Round 1</p>
            </div>
            <div className="col-3 border-left-trans-white-b p-2">
              <p className="tiny text-trans-white">Round 2</p>
            </div>
            <div className="col-3 border-left-trans-white-b p-2">
              <p className="tiny text-trans-white">Round 3</p>
            </div>
            <div className="col-3 border-left-trans-white-b p-2">
              <p className="tiny text-trans-white">Round 4</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Time;
