import React, {
  Component
} from 'react';

import {
  Text
} from 'spectacle';

export default class PushIPFS extends Component {

  state = {
    content: '',
    hash: ''
  }

  handleContentChange = ev => {
    this.setState({
      content: ev.target.value
    });
  }


  handleButtonClick = async () => {
    try {
      const files = await window.ipfs.files.add(Buffer.from(this.state.content));
      this.setState({
        hash: files[0].hash
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return ( <
      div >
      <
      input value = {
        this.state.content
      }
      onChange = {
        this.handleContentChange
      }
      /> <
      button onClick = {
        this.handleButtonClick
      } > push < /button>


      <
      Text fit > {
        this.state.hash
      } <
      /Text> < /
      div >
    );
  }
}