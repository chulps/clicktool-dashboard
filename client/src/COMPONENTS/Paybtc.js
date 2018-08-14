import React, { Component } from "react";
import "../CSS/Global.css";
import "../CSS/Dashboard.css";
import Sixth from "./Sixth";

class Paybtc extends Component {
  render() {
    return (
      <Sixth
        heading="Pay with Bitcoin"
        content={
          <div className="row m-0">
            <div className="col-3 col-md-4">
              <img className='img-fluid' src={require('../IMAGES/qr-code.png')}/>
            </div>
            <div className="col-9 col-md-8 pl-3">
              <div className="row mb-3">
                <p className="tiny col-12 mb-2 break">
                  12345678901234234534561230948712341234
                </p>
                <p className="text-md-grey col-12 tiny">
                  Minimum payment 0.01 BTC
                </p>
                <button className="small-button to-bottom">Copy Address</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <p className="text-lt-blue">
                  <small>Transaction History</small>
                </p>
                <p className="tiny">
                  After the payments token will be available on your account
                  automatically
                </p>
              </div>
            </div>
          </div>
        }
      />
    );
  }
}

export default Paybtc;
