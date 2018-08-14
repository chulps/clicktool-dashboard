import React, { Component } from "react";
import Sixth from "./Sixth";
import Count from "./Countdown";

class Special extends Component {
  render() {
    const currentDate = new Date();
    const birthday =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <Sixth
        heading="Current 12.5% special ends in"
        content={
          <div className="col-12">
            <Count date={`${birthday}-11-12T00:00:00`} />
            <div className="tiny text-md-grey to-bottom">
              <p>ICO Enddate:</p>
              <p>October 30, 2017 00:00 PTS</p>
            </div>
          </div>
        }
      />
    );
  }
}

export default Special;
