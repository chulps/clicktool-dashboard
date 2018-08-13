import React, { Component } from "react";
import Sixth from "./Sixth";
import "../CSS/Global.css";
import "../CSS/Participate.css";
import ModalVideo from 'react-modal-video'

class Participation extends Component {
  
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <Sixth
        heading="Participate"
        content={
          <div >
            <ModalVideo
              width={'70vw'}
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="qGBZWbg_26A"
              onClose={() => this.setState({ isOpen: false })}
            />
            <button className='col-12 big-button p-2 to-bottom' onClick={this.openModal}>Watch video</button>
          </div>
        }
      />
    );
  }
}

export default Participation;
