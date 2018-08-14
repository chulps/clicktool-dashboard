import React, { Component } from "react";
import "../CSS/Global.css";
import History from './History'

class Chart extends Component {
  render() {
    return (
          <div className='container px-1'>
            <h3 className='mb-3'><strong>Transactions</strong></h3>
            <History />
          </div>
    );
  }
}

export default Chart;
