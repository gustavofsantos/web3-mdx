import React, {
  Component
} from 'react';

import {
  Text
} from 'spectacle';

export default class IpfsPeers extends Component {

  state = {
    numberPeers: 0
  }

  listenPeers = () => {
    setInterval(async () => {
      try {
        const peers = await window.ipfs.swarm.peers()
        this.setState({
          numberPeers: peers.length
        });
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  }

  componentDidMount() {
    this.listenPeers();
  }

  render() {
    return ( <
      div >
      <
      Text fit >
      Conectado a <
      /Text>

      <
      Text bold > {
        this.state.numberPeers
      } <
      /Text>

      <
      Text >
      pares <
      /Text> < /
      div >
    );
  }
}