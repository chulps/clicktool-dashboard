import React, { Component } from "react";
import "../CSS/Global.css";
import Sixth from "./Sixth";

class PayETH extends Component {
  render() {
    return (
      <Sixth
        heading="Pay with Etherium"
        content={
          <div className="row w-100 m-0">
            <div className="qr-code col-4 bg-lt-grey" />
            <div className="col-8 pl-3">
              <div className="row mb-3">
                <p className="tiny col-12 mb-2 break">
                  12345678901234234534561230948712341234
                </p>
                <p className="text-md-grey col-12 tiny">
                  Minimum payment 0.01 ETH
                </p>
                <button className="small-button to-bottom">Copy Address</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <p className="tiny text-lt-blue">Transaction History</p>
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

export default PayETH;