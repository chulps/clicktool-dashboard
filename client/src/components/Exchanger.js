import React, { Component } from "react";
import Sixth from "./Sixth";
import Range from "./Range";

class Exchanger extends Component {
  render() {
    return (
      <Sixth
        heading="Exchange"
        content={
          <div className="w-100">
            <div className="row">
              <Range />
            </div>
            <small>
              <div className="row">
                <div className="col-6">= 0.9800</div>
                <div className="col-6 text-right">
                  <button className="small-button">BTC</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">= 0.9375</div>
                <div className="col-6 text-right">
                  <button className="small-button">ETH</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">= 47.9700</div>
                <div className="col-6 text-right">
                  <button className="small-button">USD</button>
                </div>
              </div>
            </small>
          </div>
        }
      />
    );
  }
}

export default Exchanger;
