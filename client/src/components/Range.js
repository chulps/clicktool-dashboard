import React, { Component } from "react";
import Slider from "react-rangeslider";
import '../CSS/Range.css'

class Range extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10000
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div className="slider w-100">
        <div className="row">
          <div className="value col-6">{value}</div>
          <span className="col-6 text-right">
            <strong>CDC</strong>
          </span>
        </div>
        <Slider
          min={1000}
          max={100000}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default Range;
