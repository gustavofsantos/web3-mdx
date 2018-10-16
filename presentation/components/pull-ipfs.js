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

export default class PullIPFS extends Component {

  state = {
    hash: '',
    result: ''
  }

  handleHashChange = ev => {
    this.setState({
      hash: ev.target.value
    });
  }


  handleButtonClick = async () => {
    try {
      const file = await window.ipfs.files.cat(this.state.hash);
      this.setState({
        result: file.toString('utf8')
      });
    } catch (error) {
      console.log(error);
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
      placeholder = "hash"
      value = {
        this.state.hash
      }
      onChange = {
        this.handleHashChange
      }
      /> <
      button style = {
        styles.button
      }
      onClick = {
        this.handleButtonClick
      } > pull < /button>

      <
      Text fit > {
        this.state.result
      } <
      /Text> < /
      div >
    );
  }
}