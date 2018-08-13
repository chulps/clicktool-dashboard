import React, { Component } from "react";
import "../CSS/Global.css";
import history from "./history.json";

class History extends Component {
  render() {
    return (
      <div className="bg-white">
        
            <div className='row'>
              <div className="col pl-3">TxHash</div>
              <div className="col">Block</div>
              <div className="col">Age</div>
              <div className="col">Form</div>
              <div className="col">To</div>
              <div className="col">Value</div>
              <div className="col pr-3 tiny text-md-grey mt-2">[TxFee]</div>
            </div>
          
            {history.map((history, index) => {
              return (
                <div key={history.id} className="row mx-3 border-top py-2">
                  <div className="col text-truncate text-lt-blue tiny pl-3">{history.txhash}</div>
                  <div className="col text-truncate text-lt-blue tiny">{history.block}</div>
                  <div className="col text-truncate tiny">{history.age}</div>
                  <div className="col text-truncate text-lt-blue tiny">{history.from}</div>
                  <div className="col text-truncate tiny">{history.to}</div>
                  <div className="col text-truncate tiny">{history.value}</div>
                  <div className="col text-truncate tiny pr-3">{history.txfee}</div>
                </div>
              );
            })}
      </div>
    );
  }
}

export default History;
