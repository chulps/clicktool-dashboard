import React, { Component } from "react";
import "../CSS/Global.css";
import "../CSS/Dashboard.css";
import Time from "./Time";
import Coinbalance from "./Coinbalance";
import Paybtc from "./Paybtc";
import Payeth from "./Payeth";
import Spec from "./Spec";
import Exchanger from "./Exchanger";
import Participation from "./Participation";
import Chart from "./Chart"

class Dash extends Component {
  render() {
    return (
      <div>
        <Time />
        {/* this row wraps all six section of the main dashboard component */}
        <div className="row ">
          <div className="container p-0">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <Coinbalance />
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <Paybtc />
                  </div>
                  <div className="col-md-6">
                    <Payeth />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Spec />
              </div>
              <div className="col-lg-4">
                <Exchanger />
              </div>
              <div className="col-lg-4">
                <Participation />
              </div>
            </div>
            
            <div className="row my-5">

              <Chart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dash;
