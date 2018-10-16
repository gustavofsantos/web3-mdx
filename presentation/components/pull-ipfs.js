import React, {
  Component
} from 'react';

import {
  Text
} from 'spectacle';

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
      div >
      <
      input value = {
        this.state.hash
      }
      onChange = {
        this.handleHashChange
      }
      /> <
      button onClick = {
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