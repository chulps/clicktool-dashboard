import React, { Component } from "react";
import Sixth from "./Sixth";
import "../CSS/Global.css";
import "../../node_modules/react-modal-video/css/modal-video.min.css"
import ModalVideo from 'react-modal-video'

class Participate extends Component {
  
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
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="qGBZWbg_26A"
              onClose={() => this.setState({ isOpen: false })}
            />
            <div className='o-hidden'>
            <img style={{width: '100%' }} src={require('../IMAGES/wall-e.jpg')} onClick={this.openModal}/>
            </div>
          </div>
        }
      />
    );
  }
}

export default Participate;
