import React, { Component } from "react";
import Sixth from "./Sixth";
import "../CSS/Global.css";

class Coinbalance extends Component {
  render() {
    return (
      <Sixth
        heading="Coinbalance"
        content={
          <div className="p-0 w-100">
            <div className="row">
              <h2 className="m-0 col-12">
                <strong>0</strong>
              </h2>
              <small className="text-md-grey col-12">TOKENS</small>
            </div>
            <button className="col-12 big-button p-2 to-bottom">
              Contribute Now
            </button>
          </div>
        }
      />
    );
  }
}

export default Coinbalance;
