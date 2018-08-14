import React, { Component } from "react";
import Sixth from "./Sixth";
import "../CSS/Global.css";
import "../CSS/YoutubeModal.css"
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
          <div style={{width: '100%'}} className='bg-lt-blue'>
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="qGBZWbg_26A"
              onClose={() => this.setState({ isOpen: false })}
            />
            <img style={{width: '100%' }} src={require('../IMAGES/wall-e.jpg')} onClick={this.openModal}/>
          </div>
        }
      />
    );
  }
}

export default Participate;
