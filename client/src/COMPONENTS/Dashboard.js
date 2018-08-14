import React, { Component } from "react";
import "../CSS/Global.css";
import "../CSS/Dashboard.css";
import Timeline from "./Timeline";
import Coinbalance from "./Coinbalance";
import Paybtc from "./Paybtc";
import Payeth from "./Payeth";
import Special from "./Special";
import Exchange from "./Exchange";
import Participate from "./Participate";
import Chart from "./Chart";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Timeline />
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
                <Special />
              </div>
              <div className="col-lg-4">
                <Exchange />
              </div>
              <div className="col-lg-4">
                <Participate />
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

export default Dashboard;
