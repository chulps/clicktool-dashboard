import React, { Component } from "react";
import "../CSS/Global.css";
import "../CSS/Participate.css";
import PropTypes from "prop-types";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      365.25 * 24 * 60 * 60;
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      24 * 60 * 60;
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      60 * 60;
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
    
      <div className="col-12 d-flex justify-content-end pt-5">
        <span className="Countdown-col col-4">
          <span className="Countdown-col-element text-center">
            <strong>{this.addLeadingZeros(countDown.days)}</strong>
            <span className="text-md-grey tiny">
              {countDown.days === 1 ? "Day" : "Days"}
            </span>
          </span>
        </span>

        <div className="col-8 d-inline-block">
            <div className='row'>
          <span className="Countdown-col col-4 Countdown-to-bottom">
            <span className="Countdown-col-element text-center">
              {this.addLeadingZeros(countDown.hours)}
              <span className="text-md-grey tiny">Hours</span>
            </span>
          </span>

          <span className="Countdown-col col-4 Countdown-to-bottom">
            <span className="Countdown-col-element text-center">
              {this.addLeadingZeros(countDown.min)}
              <span className="text-md-grey tiny">Min</span>
            </span>
          </span>

          <span className="Countdown-col col-4 Countdown-to-bottom">
            <span className="Countdown-col-element text-center">
              {this.addLeadingZeros(countDown.sec)}
              <span className="text-md-grey tiny">Sec</span>
            </span>
          </span>
          </div>
        </div>

      </div>
    );
  }
}

Count.propTypes = {
  date: PropTypes.string.isRequired
};

Count.defaultProps = {
  date: new Date()
};

export default Count;
