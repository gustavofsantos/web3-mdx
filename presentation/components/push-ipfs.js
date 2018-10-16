import React, {
  Component
} from 'react';

import {
  Text
} from 'spectacle';

const styles = {
  div: {
    display: 'block'
  },
  input: {
    width: '100%',
    padding: '0.6em',
    marginBottom: '0.6em',
    background: '#FFF',
    color: '#333',
    border: 'none',
    borderRadius: '0.2em'
  },
  button: {
    width: '100%',
    padding: '0.6em',
    marginBottom: '0.6em',
    background: '#FFF',
    color: '#333',
    border: 'none',
    borderRadius: '0.2em'
  }
}

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
      div style = {
        styles.div
      } >
      <
      input style = {
        styles.input
      }
      value = {
        this.state.content
      }
      placeholder = "conteúdo"
      onChange = {
        this.handleContentChange
      }
      /> <
      button style = {
        styles.button
      }
      onClick = {
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