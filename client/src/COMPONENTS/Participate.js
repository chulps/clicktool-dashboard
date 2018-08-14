import React, { Component } from "react";
import Sixth from "./Sixth";
import "../CSS/Global.css";
import "../CSS/YoutubeModal.css";
import ModalVideo from "react-modal-video";

class Participate extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <Sixth
        heading="Participate"
        content={
          <div className="text-center" style={{ width: "100%" }}>
            <img
              height={180}
              src={require("../IMAGES/wall-e.jpg")}
              onClick={this.openModal}
              alt='participate'
            />

            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="qGBZWbg_26A"
              onClose={() => this.setState({ isOpen: false })}
            />
          </div>
        }
      />
    );
  }
}

export default Participate;
