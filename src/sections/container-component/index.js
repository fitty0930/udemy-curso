import React, { Component } from 'react';
import BitCoinPrice from './presentational';

class BitCoinPriceContainer extends Component {
  state = { bpi: {}}

  componentDidMount () {
    fetch('https://blockchain.info/ticker')
      .then(res => res.json())
      .then(data => {
        const bpi = {}
        Object.keys(data).forEach(currency => {
          bpi[currency] = { rate: data[currency].last, code: currency }
        })
        this.setState({ bpi })
      })
  }

  render () {
    return (
      <BitCoinPrice bpi={this.state.bpi} />
    )
  }
}

export default BitCoinPriceContainer